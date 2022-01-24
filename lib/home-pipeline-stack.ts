import { Stack, StackProps, SecretValue } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines'
import { HomePipelineStage } from './home-pipeline-stage'

export class HomePipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'HomePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('olesu/home', 'main', {
          authentication: SecretValue.secretsManager('github-token-2')
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      })
    })

    const deploy = new HomePipelineStage(this, 'Deploy')
    pipeline.addStage(deploy)
  }
}
