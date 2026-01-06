pipeline {
    agent any
 
    stages {
 
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t github-profile-viewer .'
            }
        }
 
        stage('Deploy Website') {
            steps {
                sh '''
                docker stop profile || true
                docker rm profile || true
                docker run -d -p 3000:80 --name profile github-profile-viewer
                '''
            }
        }
 
    }
}
