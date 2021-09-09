- 登录
```
mysql -u <username> -p 权限不够前面加sudo
```
- 查看数据库
```
show databases;
```
- 使用数据库
```
use <database name>;
```
- 查看表
```
show tables;
```
- 查看表结构
```
desc <table name>;
```
- 查看表创建结构
```
show create table <table name>;
```
- 导出单表数据
```
mysqldump -u root -p -B halo_test --table users > /data/users.sql;
```
- 本地mac启动mysql
```
mysql.server start
mysql.server stop
```