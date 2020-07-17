pipeline {
    options {
        disableConcurrentBuilds()
    }
    agent {
        node {
            label 'master'
        }
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
            environment {
                WebDeployPublishUrl = credentials('Danglserver3DeployEndpoint')
                WebDeployUsername = credentials('Danglserver3WebDeployUsername')
                WebDeployPassword = credentials('Danglserver3WebDeployPassword')
            }
            steps {
                powershell './build.cmd DeployDemo'
            }
        }
        stage ('Publish GitHub Release') {
            environment {
                GitHubAuthenticationToken = credentials('GeorgDanglGitHubAccessToken')
            }
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
