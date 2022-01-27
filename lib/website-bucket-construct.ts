import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface WebsiteProps {
    index: string
}

export class WebsiteBucket extends Construct {
    constructor(scope: Construct, id: string, props: WebsiteProps) {
        super(scope, id)

        new Bucket(this, 'IndexBucket', {
            websiteIndexDocument: props.index,
        })

    }
}