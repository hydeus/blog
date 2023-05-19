# nginx配置前端单页应用

## 如部署的项目文件都放在nginx下的html里
```
/data/openresty-1.13.6.1/nginx/html
| v4
| samung
| demo
    | assets
    | static
    index.html
```

## nginx root与alias区别

1. root指定的文件夹下有访问真实路径文件
```
访问路径 /static/xxx
配置方法 root html/demo;
```

2. alias可以指定到别的文件夹下
```
访问路径 /static/xxx
配置方法 alias html/assets;
```

## 一级目录
```
location / {
    index index.html;
    alias /data/openresty-1.13.6.1/nginx/html/samsung;
    # alias html/samsung;
    try_files $uri $uri/ /index.html last;
}
```

## 二级目录

### alias 以爱唱为例
```
location ^~ /samsung {
    index index.html;
    alias /data/openresty-1.13.6.1/nginx/html/samsung;
    # alias html/samsung;
    try_files $uri $uri/ /index.html last;
}
```

### root 以音乐H5为例
```
location ^~ /v4 {
    index index.html;
    root /data/openresty-1.13.6.1/nginx/html; 
    # root html;
    try_files $uri $uri/ /v4/index.html last;
}
```