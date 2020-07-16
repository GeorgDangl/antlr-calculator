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
            when {
                branch 'master'
            }
            steps {
                script {
                    env.WebDeployPublishUrl = credentials('Danglserver3DeployEndpoint')
                }
                withCredentials([usernamePassword(
                        credentialsId: 'Danglserver3DeployCredentials', 
                        usernameVariable: 'WebDeployUsername', 
                        passwordVariable: 'WebDeployPassword')]) {
                    powershell './build.cmd DeployDemo -WebDeployUsername $WebDeployUsername -WebDeployPassword $WebDeployPassword'
                }
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
