pipeline {
  agent none
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://api.github.com/repos/PESolut/my-resume', branch: 'dev')
      }
    }

  }
  environment {
    GITHUB_TOKEN = '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'
  }
}