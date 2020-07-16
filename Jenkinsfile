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
            steps {
                script {
                    env.WebDeployPublishUrl = credentials('Danglserver3DeployEndpoint')
                    env.WebDeployUsername = credentials('Danglserver3WebDeployUsername')
                    env.WebDeployPassword = credentials('Danglserver3WebDeployPassword')
                }
                powershell './build.cmd DeployDemo'
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
