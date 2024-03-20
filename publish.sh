git add -A
git commit
conventional-changelog -p angular -i CHANGELOG.md -w -r 0
echo "迁移代码"
cp -R heyui ../zanshi
echo "切换至master分支"
set -e
git checkout master
cp -R ../zanshi/* ./
rm -rf ../zanshi
echo "打包hey build"
set -e
hey b
echo "更新版本"
set -e
standard-version
set -e
git add -A
git commit -m 'publish new version'
git pull
git push --follow-tags origin master
echo "发布至npm"
npm publish
git checkout doc