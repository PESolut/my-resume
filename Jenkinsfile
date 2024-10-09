pipeline {
  agent none
  stages {
    stage('Use Github Token') {
      steps {
        sh '''curl -H "Authorization: token ${GITHUB_TOKEN}" \\
     https://api.github.com/repos/PESolut/my-resume/contents/Jenkinsfile
'''
      }
    }

  }
  environment {
    GITHUB_TOKEN = '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'
  }
}