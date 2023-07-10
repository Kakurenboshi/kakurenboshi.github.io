#!/bin/bash -e

shopt -s extglob

yarn build
rm -r !(".git"|"build"|"node_modules") 
mv build/* .
rm -r build
echo "./node_modules" > .gitignore
git add .
git checkout deploy
git commit -m "🚀 Version $(date +%s)"
git push
git checkout main
