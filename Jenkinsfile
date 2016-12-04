node{
    stage ('Build') {
        git 'https://github.com/GeorgDangl/antlr-calculator.git'
        bat 'npm install'
    }
    stage ('Test') {
        bat '"C:\\Tools\\Chutzpah\\4.2.4\\chutzpah.console.exe" "%WORKSPACE%/chutzpah.json" /nunit2 typeScriptTestResults.xml'
        step(
            [
                $class: 'XUnitBuilder',
                testTimeMargin: '3000',
                thresholdMode: 1,
                thresholds: [
                    [
                        $class: 'FailedThreshold',
                        failureNewThreshold: '',
                        failureThreshold: '',
                        unstableNewThreshold: '',
                        unstableThreshold: ''
                    ],
                    [
                        $class: 'SkippedThreshold',
                        failureNewThreshold: '',
                        failureThreshold: '',
                        unstableNewThreshold: '',
                        unstableThreshold: ''
                    ]
                ],
                tools: [
                    [
                        $class: 'NUnitJunitHudsonTestType',
                        deleteOutputFiles: true,
                        failIfNotNew: true,
                        pattern: 'typeScriptTestResults.xml',
                        skipNoTestFiles: false,
                        stopProcessingIfError: true
                    ]
                ]
            ]
        )
    }
    stage ('Deploy')
    {
        withCredentials(
            [
                string(credentialsId: 'Danglserver3DeployEndpoint', variable: 'DeployEndpoint'),
                usernamePassword(credentialsId: 'Danglserver3DeployCredentials',
                    passwordVariable: 'Password', usernameVariable: 'Username')
            ]) {
                bat "\"C:\\Program Files (x86)\\IIS\\Microsoft Web Deploy V3\\msdeploy.exe\"\
 -verb:sync\
 -source:IisApp=\'%WORKSPACE%\'\
 -dest:iisapp=\'AntlrCalculatorDemo\',computerName=\'"+DeployEndpoint+"/msdeploy.axd?site=AntlrCalculatorDemo\',authType=\'Basic\',username=\'"+Username+"\',password=\'"+Password+"\'\
 -skip:Directory=\\\\node_modules\
 -skip:Directory=\\\\\\.git\
 -enablerule:AppOffline"
        }
    }
    stage ('Cleanup')
    {
        step([$class: 'WsCleanup'])
    }
}