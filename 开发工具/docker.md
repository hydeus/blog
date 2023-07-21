# docker [常有命令](https://blog.csdn.net/qq_45547688/article/details/125785419)

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
docker build -it xxx(自定义镜像名) .
```

- 运行镜像
```
docker run -it -d -p 主机端口:容器端口 xxx(自定义镜像名) [COMMAND](可选，容器内执行的命令)
```

- 进入容器
```
docker exec -it xxx(容器ID，上一步运行镜像会返回容器ID或docker ps可以查看到) /bin/bash(在容器中开启交互模式的终端)
```