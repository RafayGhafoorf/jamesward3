git add -A
git commit -m 'publish至npm暂时commit'
echo "迁移代码"
cp -R heyui ../zanshi
echo "切换至gh-pages分支"
git checkout master
cp -R ../zanshi/* ./
# cp index.html 404.html
# git add -A
# git commit -m '新版'
# git pull
# git push

# echo "切换至doc分支"
# git checkout doc
# rm -rf ../gen
