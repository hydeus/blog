#### 1.script标签中defer和async的区别？
- 相同点：
  - 都是异步加载脚本
- 不同点：
  - defer: 是等待文档被解析完成后开始执行
  - async: 是脚本加载或下载完成后就开始执行；这导致async属性下的脚本是乱序的，对于script有先后依赖关系的情况不适用
#### 2.有几种前端储存的方式？
- cookies、localstorage、sessionstorage、Web SQL、IndexedDB