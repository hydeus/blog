# webpack八股文


## webpack打包流程

1. 初始化参数：shell webpack.config.js
2. 开始编辑：初始化一个Compliation对象，加载所有的配置，开始执行编译
3. 确定入口：根据entry中的配置，找出所有的入口文件
4. 编译模块：从入口文件开始，调用所有的loader，再去递归的查找依赖
5. 完成模块编译：得到每个模块被翻译后的最终内容以及他们之间的依赖关系
6. 输出资源：根据得到的依赖关系，组装成一个包含多个module的chunk
7. 输出完成：根据配置确定要输出的文件名及文件路径


## loader与plugin的区别

### Loader 

* 模块转换器，将非js模块转化为webpack能识别的js模块。
* 本质上，webpack loader将所有类型的文件，转换为应用程序的**依赖图**可以直接引用的模块
* 配置：在module.rules中配置，作为模块的解析规则，类型为数组。每一项都是一个object，内部包含了test(类型文件)，loader，options等参数。

### Plugin

* 扩展插件，webpack运行的各个阶段，都会广播对应的事件，插件去监听对应的事件
* 配置：在plugins中单独配置，类型为数组，每一项都是一个Plugin的实例，参数通过构造函数传入。

### Complier

* 对象，包含了webpack环境的所有配置信息，包括options loader，plugins，webpack启动的时候实例化，它在全局是唯一的，可以把它理解为webpack的实例

### Compliation

* 包含了当前的模块资源，编译生成资源
* webpack在开发模式下运行的时候，每当检测到一个文件的变化，就会创建一个新的Compliation


## 如何优化webpack构建速度

1. 使用高版本的node和webpack
2. 多进程、多实例构建(HappyPack(不维护了) thread-loader)
3. DLL 


## babel工作原理

1. 解析(parse): 将代码解析生成抽象语法树（AST）,即词法分析与语法分析的过程
2. 转换(transform): 对AST进行变换一系列的操作，babel接受得到AST并通过babel-traverse对其进行遍历，在此过程中进行添加、更新及移除操作
3. 生成(generate): 将变换后的AST再转换为JS代码，使用到的模块是babel-generator

