using Nuke.Common;
using Nuke.Common.Execution;
using Nuke.Common.Tools.GitVersion;
using Nuke.WebDeploy;
using static Nuke.Common.IO.FileSystemTasks;
using static Nuke.Common.Tools.Npm.NpmTasks;
using static Nuke.WebDeploy.WebDeployTasks;
using static Nuke.Common.IO.TextTasks;

[UnsetVisualStudioEnvironmentVariables]
class Build : NukeBuild
{
    /// Support plugins are available for:
    ///   - JetBrains ReSharper        https://nuke.build/resharper
    ///   - JetBrains Rider            https://nuke.build/rider
    ///   - Microsoft VisualStudio     https://nuke.build/visualstudio
    ///   - Microsoft VSCode           https://nuke.build/vscode

    public static int Main () => Execute<Build>(x => x.Clean);

    [Parameter("Configuration to build - Default is 'Debug' (local) or 'Release' (server)")]
    readonly Configuration Configuration = IsLocalBuild ? Configuration.Debug : Configuration.Release;
    [GitVersion(Framework = "netcoreapp3.1")] readonly GitVersion GitVersion;

    [Parameter] string WebDeployUsername;
    [Parameter] string WebDeployPassword;
    [Parameter] string WebDeploySiteName = "AntlrCalculatorDemo";
    [Parameter] string WebDeployPublishUrl;

    Target Clean => _ => _
        .Executes(() =>
        {
            DeleteDirectory(RootDirectory / "dist");
            DeleteDirectory(RootDirectory / "demo" / "dist");
            DeleteDirectory(RootDirectory / "coverage");
            DeleteFile(RootDirectory / "karma-results.xml");
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
        .Executes(() =>
        {
            Npm("ci", RootDirectory);
            Npm("run build", RootDirectory);
            var distDirectory = RootDirectory / "dist";
            CopyFile(RootDirectory / "README.md", distDirectory / "README.md");
            CopyFile(RootDirectory / "LICENSE.md", distDirectory / "LICENSE.md");
            CopyFile(RootDirectory / "package.json", distDirectory / "package.json");
            Npm($"version {GitVersion.NuGetVersion}", distDirectory);

            var npmTag = GitVersion.BranchName.Equals("master") || GitVersion.BranchName.Equals("origin/master")
            ? "latest"
            : "next";

            Npm($"publish --tag={npmTag}", distDirectory);
        });

    Target DeployDemo => _ => _
        .DependsOn(Clean)
        .Requires(() => WebDeployUsername)
        .Requires(() => WebDeployPassword)
        .Requires(() => WebDeploySiteName)
        .Requires(() => WebDeployPublishUrl)
        .Executes(() =>
        {
            Npm("ci", RootDirectory);
            Npm("run build", RootDirectory);
            CopyDirectoryRecursively(RootDirectory / "dist", RootDirectory / "demo" / "dist");
            WriteAllText(RootDirectory / "demo" / "index.html", ReadAllText(RootDirectory / "demo" / "index.html")
                .Replace("@@APP_VERSION@@", GitVersion.NuGetVersion));

            WebDeploy(s => s
                .SetSourcePath(RootDirectory / "demo")
                .SetUsername(WebDeployUsername)
                .SetPassword(WebDeployPassword)
                .SetEnableAppOfflineRule(true)
                .SetPublishUrl(WebDeployPublishUrl.TrimEnd('/') + "/msdeploy.axd?site=" + WebDeploySiteName)
                .SetSiteName(WebDeploySiteName)
                .SetEnableDoNotDeleteRule(false)
                .SetRetryAttempts(5)
                .SetWrapAppOffline(false));
        });
}
