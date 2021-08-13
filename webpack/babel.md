#### babel工作原理
    - 解析(parse): 将代码解析生成抽象语法树（AST）,即词法分析与语法分析的过程
    - 转换(transform): 对AST进行变换一系列的操作，babel接受得到AST并通过babel-traverse对其进行遍历，在此过程中进行添加、更新及移除操作
    - 生成(generate): 将变换后的AST再转换为JS代码，使用到的模块是babel-generator