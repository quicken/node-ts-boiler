#!/bin/bash

# Build and publish this project to NPM.

yarn test
yarn build
chmod +x ./dist/index.js
yarn publish --public
