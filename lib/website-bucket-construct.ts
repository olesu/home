import { RemovalPolicy } from "aws-cdk-lib";
import { BlockPublicAccess, Bucket, BucketPolicy } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface WebsiteProps {
    index: string
}

export class WebsiteBucket extends Construct {
    constructor(scope: Construct, id: string, props: WebsiteProps) {
        super(scope, id)

        const bucket = new Bucket(this, 'IndexBucket', {
            bucketName: 'website-01',
            websiteIndexDocument: props.index,
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        })

    }
}