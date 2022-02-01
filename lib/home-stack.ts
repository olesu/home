import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { WebsiteBucket } from './website-bucket-construct'

export class HomeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // eslint-disable-next-line no-new
    new WebsiteBucket(this, 'IndexBucket', {
      index: 'index.html'
    })
  }
}
