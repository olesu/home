import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines'

export class HomeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'HomepagePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('olesu/home', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      })
    })
  }
}
