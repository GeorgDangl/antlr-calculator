using Nuke.Common;
using Nuke.Common.Execution;
using Nuke.Common.Tools.GitVersion;
using static Nuke.Common.IO.FileSystemTasks;
using static Nuke.Common.Tools.Npm.NpmTasks;
using static Nuke.Common.ChangeLog.ChangelogTasks;
using static Nuke.Common.IO.TextTasks;
using static Nuke.GitHub.GitHubTasks;
using Nuke.GitHub;
using Nuke.Common.Git;
using System;
using System.Linq;
using Nuke.Common.IO;
using System.IO.Compression;
using System.Text;
using System.Net.Http;
using Nuke.Common.Tools.AzureKeyVault.Attributes;
using Nuke.Common.Tools.AzureKeyVault;
using static Nuke.Common.Tools.Slack.SlackTasks;
using Nuke.Common.Tools.Slack;
using System.IO;
using Nuke.Common.Tools.Teams;

[UnsetVisualStudioEnvironmentVariables]
class Build : NukeBuild
{
    /// Support plugins are available for:
    ///   - JetBrains ReSharper        https://nuke.build/resharper
    ///   - JetBrains Rider            https://nuke.build/rider
    ///   - Microsoft VisualStudio     https://nuke.build/visualstudio
    ///   - Microsoft VSCode           https://nuke.build/vscode

    public static int Main() => Execute<Build>(x => x.Clean);

    [Parameter] readonly string Configuration = IsLocalBuild ? "Debug" : "Release";

    [GitVersion(Framework = "netcoreapp3.1")] readonly GitVersion GitVersion;
    [GitRepository] readonly GitRepository GitRepository;

    AbsolutePath ChangeLogFile => RootDirectory / "CHANGELOG.md";
    AbsolutePath OutputDirectory => RootDirectory / "output";

    [KeyVaultSettings(
        BaseUrlParameterName = nameof(KeyVaultBaseUrl),
        ClientIdParameterName = nameof(KeyVaultClientId),
        ClientSecretParameterName = nameof(KeyVaultClientSecret))]
    readonly KeyVaultSettings KeyVaultSettings;
    [Parameter] string KeyVaultBaseUrl;
    [Parameter] string KeyVaultClientId;
    [Parameter] string KeyVaultClientSecret;
    [KeyVault] KeyVault KeyVault;

    [KeyVaultSecret] string DanglCiCdSlackWebhookUrl;
    [KeyVaultSecret("AntlrCalculatorDemo-WebDeployUsername")] string WebDeployUsername;
    [KeyVaultSecret("AntlrCalculatorDemo-WebDeployPassword")] string WebDeployPassword;
    [KeyVaultSecret] string GitHubAuthenticationToken;
    [KeyVaultSecret] readonly string DanglCiCdTeamsWebhookUrl;
    [Parameter] string AppServiceName = "antlr-calculator-demo";

    protected override void OnTargetFailed(string target)
    {
        if (IsServerBuild)
        {
            SendTeamsMessage("Build Failed", $"Target {target} failed for Dangl.Calculator, " +
                        $"Branch: {GitRepository.Branch}", true);
        }
    }

    void SendTeamsMessage(string title, string message, bool isError)
    {
        if (!string.IsNullOrWhiteSpace(DanglCiCdTeamsWebhookUrl))
        {
            var themeColor = isError ? "f44336" : "00acc1";
            TeamsTasks
                .SendTeamsMessage(m => m
                    .SetTitle(title)
                    .SetText(message)
                    .SetThemeColor(themeColor),
                    DanglCiCdTeamsWebhookUrl);
        }
    }

    Target Clean => _ => _
        .Executes(() =>
        {
            DeleteDirectory(RootDirectory / "dist");
            DeleteDirectory(RootDirectory / "demo" / "dist");
            DeleteDirectory(RootDirectory / "coverage");
            DeleteFile(RootDirectory / "karma-results.xml");
            EnsureCleanDirectory(OutputDirectory);
        });

    Target Test => _ => _
        .DependsOn(Clean)
        .Executes(() =>
        {
            Npm("ci", RootDirectory);
            Npm("run test:ci", RootDirectory);
        });

    Target Publish => _ => _
        .DependsOn(Clean)
        .OnlyWhenDynamic(() => Nuke.Common.CI.Jenkins.Jenkins.Instance == null
            || Nuke.Common.CI.Jenkins.Jenkins.Instance.ChangeId == null)
        .Executes(() =>
        {
            Npm("ci", RootDirectory);
            Npm("run build", RootDirectory);
            var distDirectory = RootDirectory / "dist";
            CopyFile(RootDirectory / "README.md", distDirectory / "README.md");
            CopyFile(RootDirectory / "LICENSE.md", distDirectory / "LICENSE.md");
            CopyFile(RootDirectory / "CHANGELOG.md", distDirectory / "CHANGELOG.md");
            CopyFile(RootDirectory / "package.json", distDirectory / "package.json");
            Npm($"version {GitVersion.NuGetVersion}", distDirectory);

            var npmTag = GitVersion.BranchName.Equals("master") || GitVersion.BranchName.Equals("origin/master")
            ? "latest"
            : "next";

            Npm($"publish --tag={npmTag}", distDirectory);

            if (npmTag == "latest")
            {
                SendTeamsMessage("New Release", $"New release available for antlr-calculator: {GitVersion.NuGetVersion}", false);
            }

        });

    Target DeployDemo => _ => _
        .DependsOn(Clean)
        .Requires(() => WebDeployUsername)
        .Requires(() => WebDeployPassword)
        .Requires(() => AppServiceName)
        .Requires(() => DanglCiCdSlackWebhookUrl)
        .OnlyWhenDynamic(() => Nuke.Common.CI.Jenkins.Jenkins.Instance == null
            || Nuke.Common.CI.Jenkins.Jenkins.Instance.ChangeId == null)
        .Executes(async () =>
        {
            Npm("ci", RootDirectory);
            Npm("run build", RootDirectory);
            CopyDirectoryRecursively(RootDirectory / "dist", RootDirectory / "demo" / "dist");
            WriteAllText(RootDirectory / "demo" / "index.html", ReadAllText(RootDirectory / "demo" / "index.html")
                .Replace("@@APP_VERSION@@", GitVersion.NuGetVersion));

            var base64Auth = Convert.ToBase64String(Encoding.Default.GetBytes($"{WebDeployUsername}:{WebDeployPassword}"));
            ZipFile.CreateFromDirectory(RootDirectory / "demo", OutputDirectory / "deployment.zip");
            using (var memStream = new MemoryStream(ReadAllBytes(OutputDirectory / "deployment.zip")))
            {
                memStream.Position = 0;
                var content = new StreamContent(memStream);
                var httpClient = new HttpClient();
                httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", base64Auth);
                var requestUrl = $"https://{AppServiceName}.scm.azurewebsites.net/api/zipdeploy";
                var response = await httpClient.PostAsync(requestUrl, content);
                var responseString = await response.Content.ReadAsStringAsync();
                Logger.Normal(responseString);
                Logger.Normal("Deployment finished");
                if (!response.IsSuccessStatusCode)
                {
                    ControlFlow.Fail("Deployment returned status code: " + response.StatusCode);
                }
                else
                {
                    await SendSlackMessageAsync(c => c
                        .SetUsername("Dangl CI Build")
                        .SetAttachments(new SlackMessageAttachment()
                            .SetText($"A new version was deployed for antlr-calculator")
                            .SetColor("good")
                            .SetFields(new[]
                            {
                                        new SlackMessageField
                                        ()
                                        .SetTitle("Version")
                                        .SetValue(GitVersion.NuGetVersion)
                            })),
                            DanglCiCdSlackWebhookUrl);
                }
            }
        });

    Target PublishGitHubRelease => _ => _
        .Requires(() => GitHubAuthenticationToken)
        .OnlyWhenDynamic(() => GitVersion.BranchName.Equals("master") || GitVersion.BranchName.Equals("origin/master"))
        .Executes(async () =>
        {
            var releaseTag = $"v{GitVersion.MajorMinorPatch}";

            var changeLogSectionEntries = ExtractChangelogSectionNotes(ChangeLogFile);
            var latestChangeLog = changeLogSectionEntries
                .Aggregate((c, n) => c + Environment.NewLine + n);
            var completeChangeLog = $"## {releaseTag}" + Environment.NewLine + latestChangeLog;

            var repositoryInfo = GetGitHubRepositoryInfo(GitRepository);

            await PublishRelease(x => x
                    .SetCommitSha(GitVersion.Sha)
                    .SetReleaseNotes(completeChangeLog)
                    .SetRepositoryName(repositoryInfo.repositoryName)
                    .SetRepositoryOwner(repositoryInfo.gitHubOwner)
                    .SetTag(releaseTag)
                    .SetToken(GitHubAuthenticationToken));
        });
}
