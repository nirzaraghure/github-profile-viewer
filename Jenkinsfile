pipeline {
    agent any


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
                    docker run -d -p 3000:80 --name profile github-profile-viewer
                    '''
                }
            }
        }
    }
}
