### vue二级目录在nginx上的两种配置

1. alias 以爱唱为例
```
location ^~ /samsung {
    index index.html;
    alias /data/nfsmount/samsung;
    try_files $uri $uri/ /index.html last;
}
```
2. root 以音乐H5为例
```
location ^~ /v4 {
    index index.html;
    root /data/openresty-1.13.6.1/nginx/html; // 或html
    try_files $uri $uri/ /v4/index.html last;
}
```