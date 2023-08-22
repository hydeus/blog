- 关联远程仓库，可以设置多个仓库
```
git remote add origin(对应远程仓库的主分支) [url]
```

- 删除git缓存
```
git rm -r --cached .
```

- 修改origin远程仓库
```
git remote set-url origin [url]
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

- 查看key
```
cat ~/.ssh/id_rsa.pub
```

- 生成key
```
ssh-keygen -t rsa -C "wuyfnet@gmail.com"
```

- 合并某一次提交
```
git cherry-pick xxx
git push
```