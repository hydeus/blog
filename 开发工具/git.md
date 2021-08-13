- 关联远程仓库，可以设置多个仓库
```
git remote add origin(对应远程仓库的主分支) [url]
```
- 修改origin远程仓库
```
git remote origin set-url [url]
```
- 删除origin远程仓库
```
git remote rm origin
```
- git全局设置
```
git config --global user.name 'xxx'
git config --global user.email 'xxx'
```
- git本项目设置
```
git config --local user.name 'xxx'
git config --local user.email 'xxx'
```