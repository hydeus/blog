- 查看npm源仓库
```
npm config get registry
```
- 设置npm仓库源
```taobao
npm config set registry https://registry.npm.taobao.org
```
```官方
npm config set registry https://registry.npmjs.org
```
- 安装所有依赖包，适用于本地开发
```
npm install
```
- 只安装生产依赖包
```
npm install --production
```
- 安装XX到生产环境依赖
```
npm install xx --save
```
- 安装XX到开发环境依赖
```
npm install xx --save-dev 安装XX到开发环境依赖
```
- 本次安装从淘宝镜像安装
```
npm --registry=https://registry.npm.taobao.org install
```