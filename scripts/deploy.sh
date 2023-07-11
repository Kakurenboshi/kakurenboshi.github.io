#!/bin/bash -e

yarn build

BUILD_DIR=`mktemp -d`
mv build "$BUILD_DIR"
mv node_modules "$BUILD_DIR"

git checkout deploy

rm -rf *
mv "$BUILD_DIR/build/"* .
echo "/node_modules" > .gitignore

git add .
git commit -m "🚀 Version $(date +%s)"
git push

git checkout main
mv "$BUILD_DIR/node_modules" .

rm -rf "$BUILD_DIR"
