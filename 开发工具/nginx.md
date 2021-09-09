- 启动，指定配置文件启动
```
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```
- 测试
```
nginx -t
```
- 重启
```
nginx -s reload
```
- 停止
```
nginx -s quit 从容停止服务
nginx -s stop 立刻停止
```
- 查看
```
ps aux | grep nginx
```
- 查看已启用端口号
```
netstat -tlnp
```
- 查看进程ID
```
ps -ef | grep nginx
```

# **权限不够前加 sudo**