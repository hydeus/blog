- 修改文件或文件夹的所属用户
```
chown <username> <file | filename>
```
- 修改文件或文件夹的权限
```
chmod -R(递归，标识文件夹下所有的内容都是这个权限) 777 | 770(不止这些) <file | filename>
```
- 防火墙增加端口
```
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A OUTPUT -p tcp --sport 22 -j ACCEPT
```
- 防火墙操作(==linux 7以后需要先装iptables-services来管理iptables==)
```
service iptables save (保存iptables配置)
service iptables restart
service iptables stop
iptables -L -n --line-number(显示带有编号的规则)
iptables -D OUTPUT 1(删除第一条规则，OUTPUT)
iptables -D INPUT 1(删除第一条规则，INPUT)
```
-用户
```
useradd xxx(添加用户)
passwd xxx(给用户设置密码)
```