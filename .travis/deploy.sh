#!/usr/bin/env bash

set -e

echo "Building..."
npm run build

echo "Deploying to S3/CloudFormation..."
aws s3 sync build/ "s3://${S3_BUCKET_NAME}" --acl public-read
aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION_ID}" --paths "/*"
