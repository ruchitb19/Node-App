pipeline {
    agent { label "local" }
    
    stages {
        stage("Clone App") {
            steps {
                echo "This is the App cloning stage"
                git branch: 'main', url: 'https://github.com/ruchitb19/Node-App.git'
            }
        }

        stage("Docker Build") {
            steps {
                echo "This is the Docker Build stage"
                sh '''
                docker build -t node-app-1 .
                '''
                echo "Build successfully"
            }
        }

        stage("Docker Run") {
            steps {
                echo "This is the Docker Run stage"
                sh '''
                docker rm -f node-app-container || true
                docker run -d -p 3000:3000 --name node-app-container node-app-1
                '''
                echo "Container build and running successfully"
            }
        }

        stage("Docker Push") {
            steps {
                echo "This is the Docker Push stage"
                withCredentials([usernamePassword(
                    credentialsId: 'docker-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker tag node-app-1 ruchitbhosle19/node-app:v1
                    docker push ruchitbhosle19/node-app:v1
                    '''
                }
                echo "Docker Push successful"
            }
        }
    }
}