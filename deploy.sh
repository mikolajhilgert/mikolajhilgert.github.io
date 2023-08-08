#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.mikolajhilgert.pl' > CNAME

git init
git add .
git commit -m 'deploy'

git push git@github.com:mikolajhilgert/mikolajhilgert.github.io.git master:gh-pages --force
