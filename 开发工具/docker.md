# docker [常有命令](https://blog.csdn.net/qq_45547688/article/details/125785419)

- docker login
```
docker login -u username(docker的用户名或邮箱) -p password
```

- docker logout
```
docker logout
```

- 查看容器
```
docker ps
```

- 查看镜像
```
docker images
```

- 构建镜像
```
docker build -t xxx(自定义镜像名) .
```

- 将本地镜像打上标签
```
docker tag xxx(自定义镜像名):latest 镜像名:版本号（这里是远程仓库的镜像名）
```

- 将本地镜像推送到远程仓库
```
docker push 镜像名:版本号（这里是远程仓库的镜像名）
```

- 从远程仓库拉取最新的镜像
```
docker pull 镜像名:版本号（这里是远程仓库的镜像名）
```

- 运行镜像
```
docker run -d(后台运行) -p 主机端口:容器端口 xxx(自定义镜像名) [COMMAND](可选，容器内执行的命令)
```

- 进入容器
```
docker exec -it xxx(容器ID，上一步运行镜像会返回容器ID或docker ps可以查看到) /bin/bash(在容器中开启交互模式的终端)
```

- 将本地镜像导出
```
docker save -o xxx/xxx.tar(全路径，好找点，不然就放在执行命令目录下) 本地镜像ID/镜像名:tagname
```

- 将本地镜像导入到其他主机
```
docker load -i xxx/xxx.tar
```