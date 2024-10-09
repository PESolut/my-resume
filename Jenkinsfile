pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://api.github.com/repos/PESolut/my-resume', branch: 'dev')
      }
    }

  }
  environment {
    GITHUB_TOKEN = 'credentials(\'6622c479-a233-4527-841f-336bf79a1f5b\')'
  }
}