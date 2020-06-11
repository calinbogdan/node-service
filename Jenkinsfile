pipeline {
    agent {
        docker {
            image 'node:12'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}