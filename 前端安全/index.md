## [前端安全](https://zhuanlan.zhihu.com/p/108704264)

### 1. XSS(css) 跨站脚本攻击
      - 原理：页面渲染的数据中包含可执行的脚本代码
      - 攻击的基本类型：反射型（url参数直接注入）、存储型（存储到DB后读取时注入）
      - 注入点：HTML节点内的内容、HTML中DOM元素的属性（onerror）、javascript注入（富文本）
      - 例子：音乐门户V2版本就收到了XSS攻击，解决方法：参数校验严格控制
### 2. CSRF 跨站请求伪造

### 3. 点击劫持
      - 原理：外部网站使用iframe嵌套本网站页面
      - 解决方法：在服务端设置X-FRAME-OPTIONS配合https实现
