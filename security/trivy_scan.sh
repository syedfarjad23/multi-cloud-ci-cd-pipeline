#!/bin/bash

IMAGE_NAME=$1

echo "🔍 Running Trivy scan for image: $IMAGE_NAME"
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image --severity HIGH,CRITICAL "$IMAGE_NAME"
