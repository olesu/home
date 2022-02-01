import { Stack } from 'aws-cdk-lib'
import { Capture, Template } from 'aws-cdk-lib/assertions'
import { WebsiteBucket } from '../lib/website-bucket-construct'

describe('WebsiteBucket', () => {
  const stack = new Stack()

  new WebsiteBucket(stack, 'TestWebsiteBucket', {
    index: 'index.html'
  })

  const template = Template.fromStack(stack)

  test('Bucket Created', () => {
    template.resourceCountIs('AWS::S3::Bucket', 1)
  })
  test('Bucket Has Index Document', () => {
    const capture = new Capture()

    template.hasResourceProperties('AWS::S3::Bucket', {
      WebsiteConfiguration: capture
    })
    expect(capture.asObject()).toEqual({
      IndexDocument: 'index.html'
    })
  })
})
