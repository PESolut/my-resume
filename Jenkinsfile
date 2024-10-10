pipeline {
    agent any
    environment {
        GITHUB_TOKEN = credentials('6622c479-a233-4527-841f-336bf79a1f5b')
    }
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    checkout([$class: 'GitSCM', 
                        branches: [[name: 'main']],
                        userRemoteConfigs: [[
                            url: 'https://github.com/PESolut/my-resume.git',
                            credentialsId: '6622c479-a233-4527-841f-336bf79a1f5b'
                        ]]
                    ])
                }
            }
        }
        stage('Print Current Directory') {
            steps {
                sh 'pwd'
            }
        }
        stage('Logs and Tests') {
            parallel {
                stage('List / Log Files') {
                    steps {
                        sh 'ls -la'
                    }
                }
                stage('Front-End Unit Tests') {
                    steps {
                        dir('react-fe') {
                            sh 'npm i && npm run test'
                        }
                    }
                }
            }
        }
    }
}