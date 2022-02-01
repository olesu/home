#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { HomePipelineStack } from '../lib/home-pipeline-stack';

new HomePipelineStack(new cdk.App(), 'HomePipelineStack', {});
