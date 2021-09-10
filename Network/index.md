## TCP/IP（Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议）指一个由FTP、SMTP、TCP、UDP、IP等协议构成的协议簇

## Ip（Internet Protocol，网际互联协议）

## TCP（Transmission Control Protocol，传输控制协议）

## HTTP(HyperText Transfer Protocol，超文本传输协议)

## HTTPS(HyperText Transfer Protocaol Secure，超文本传输安全协议)
  - HTTPS = HTTP + SSL/TLS
  - 加密算法~~todo~~
  - 数字证书~~todo~~
  - https验证过程~~todo~~

## HTTP1.0
  - 无状态、无连接

## HTTP1.1
  - 持久连接（connection: keep-alive）
  - 请求管道化
  - 增加缓存处理（新增cache-control）
  - 增加host字段、支持断点传输等

## HTTP2.0
  - 多路复用（单个TCP可以有多个文件）
  - 头部压缩（去掉一样的头部参数，只传输不一样的参数）
  - 二进制传输（传输数据改为二进制传输，安全，快）
  - 服务器推送（代码支持）

## 三次握手
  1. 客户端发送SYN(SEQ=x)报文给服务器，进入SYN_SEND状态
  2. 服务端收到SYN报文，回应一个SYN(SEQ=y) ACK(ACK=x+1)报文，进入SYN_RECV状态
  3. 客户端收到服务端的SYN报文，回应一个ACK(ACK=y+1)报文，进入Established（已建立的）状态

  三次握手完成后，TCP客户端和服务端成功建立连接，可以开始传输数据了

  为什么握手是三次，而不是两次或四五次呢？
  1. 为什么是三次？阻止重复历史连接的初始化、同步双方的初始序列号、避免浪费资源
  2. 为什么不是四五次？其实也可以是四五次，只是三次更简洁，没那么繁琐

## 四次挥手（连接终止协议）~~todo~~

## 三次握手与SSL加密顺序 ~~todo~~

## 缓存
  #### 强制缓存
    1. 标识
      - Cache-Control
      - Expires
    2. 三级缓存原理
      - 先查找内存，如果内存存在，从内存中加载，Size栏显示from memory cache，状态码为200
      - 如果内存中没找到，选择硬盘缓存，如果硬盘中有，从硬盘中加载，Size栏显示from disk cache，状态码为200
      - 如果硬盘中美找到，那就进行网络请求，走协商缓存
      - 加载到的资源缓存到内存或硬盘中
    3. 文件缓存
      - 样式文件缓存到磁盘中，因为css样式加载一次即可渲染出页面
      - 脚本缓存到内存中，因为把脚本存在磁盘中，在执行时会把该脚本从磁盘中提取到缓存中来，这样的IO开销比较大，有可能会导致浏览器失去响应
    
  #### 协商缓存
    1. 标识
      - Last-Modified If-Modified-Since (http1.0)
      - Etag If-None-Match (http1.1)
    2. 原理
      - 对比相应字段，如果没有变化，返回304，从浏览器缓存中读取
      - 否则，返回200，传输新的资源
