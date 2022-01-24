import { Stack } from "aws-cdk-lib";
import { Capture, Template } from "aws-cdk-lib/assertions";
import { HomeStack } from "../lib/home-stack";

describe('HomeStack', () => {
    const stack = new HomeStack(new Stack(), 'HomeStack')
    const template = Template.fromStack(stack)

    test('Bucket Created', () => {
        const capture = new Capture()

        template.resourceCountIs("AWS::S3::Bucket", 1)
        template.hasResourceProperties("AWS::S3::Bucket", {
            WebsiteConfiguration: capture,
        })
        expect(capture.asObject()).toEqual({
            IndexDocument: "index.html"
        })
    })
    test('Bucket Has Index Document', () => {
        const capture = new Capture()

        template.hasResourceProperties("AWS::S3::Bucket", {
            WebsiteConfiguration: capture,
        })
        expect(capture.asObject()).toEqual({
            IndexDocument: "index.html"
        })
    })
});
