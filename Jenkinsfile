pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t github-profile-viewer .'
                }
            }
        }

        stage('Deploy Website') {
            steps {
                script {
                    sh '''
                    docker stop profile || true
                    docker rm profile || true
                    docker run -d -p 8080:80 --name profile github-profile-viewer
                    '''
                }
            }
        }
    }
}
