import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { HomeStack } from "../lib/home-stack";

describe('HomeStack', () => {
    test('Bucket Created', () => {
        const stack = new HomeStack(new Stack(), 'HomeStack')

        const template = Template.fromStack(stack)
        template.resourceCountIs("AWS::S3::Bucket", 1)
    })
});
