1. websocket优化
    - 减少dom，绘制代替dom
    - 加入队列，定时执行操作
    - 数据量大，websocket可以只是通知标识，然后ajax去获取数据

2. 项目优化
    - 浏览器缓存
    - 防抖、节流
    - 资源懒加载、预加载
    - nginx开启gzip压缩
    - 使用文档片段（fragment）减少dom的重排/回流
    - 提取公共代码上CDN
    - js、css代码压缩
    - 资源打包分析（webpack-bundle-analyzer）
    - 雅虎优化建议![image](https://mmbiz.qpic.cn/mmbiz_png/Tmczbd3NL02IDMrJHZX1RL5v0WpsrycoGEERib7n94498sIMuoWlqHyeXw6MJbYq0txSBjQ4sNv1gKrRN5jF6JA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

3. 优化首屏加载
    - 做到一个最优的引入方案
    - import('juery').then($ => console.log($))
