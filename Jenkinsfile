Pipeline{
  agent any
  stages{
    stage('build'){
      steps{
        script{
          bat 'docker build -t my-node .'
        }
      }
    }
    stage('test'){
      steps{
        script{
          echo 'testing'
        }
      }
    }
    stage('deploy'){
      steps{
        script{
          echo 'deploying an application'
        }
      }
    }
  }
}
