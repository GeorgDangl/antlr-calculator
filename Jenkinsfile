pipeline {
    options {
        disableConcurrentBuilds()
    }
    agent {
        node {
            label 'master'
        }
    }
    environment {
        KeyVaultBaseUrl = credentials('AzureCiKeyVaultBaseUrl')
        KeyVaultClientId = credentials('AzureCiKeyVaultClientId')
        KeyVaultClientSecret = credentials('AzureCiKeyVaultClientSecret')
    }
    stages {
        stage ('Test') {
            steps {
                powershell './build.cmd Test'
            }
            post {
                always {
                    xunit([
                        JUnit(deleteOutputFiles: true, failIfNotNew: true, pattern: 'karma-results.xml', skipNoTestFiles: false, stopProcessingIfError: true)
                        ])
                }
            }
        }
        stage ('Publish Library') {
            steps {
                powershell './build.cmd Publish'
            }
        }
        stage ('Deploy Demo') {
            steps {
                powershell './build.cmd DeployDemo'
            }
        }
        stage ('Publish GitHub Release') {
            steps {
                powershell './build.cmd PublishGitHubRelease'
            }
        }
    }
    post {
        always {
            step([$class: 'Mailer',
                notifyEveryUnstableBuild: true,
                recipients: "georg.dangl@dangl-it.com",
                sendToIndividuals: true])
            cleanWs()
        }
    }
}
