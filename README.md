# asyncRequestComponent

异步请求组件

1、初始化项目
执行命令：npm init

2、安装 webpack
执行命令：npm install webpack webpack-cli --save-dev

3、配置打包命令
在 package.json 文件中，scripts 下添加"build": "webpack --entry=./index.js --output-filename=bundle.js --mode=development"

4、运行打包命令
npm run build
生成 bundle.js 文件

5、添加配置文件 webpack.config.js，修改 package.json 文件下的 build 配置

6、安装 webpack-dev-server，安装成功修改 webpack.config.js 配置文件
npm install webpack-dev-server --save-dev

7、package.json 配置文件，scripts 下添加"dev": "webpack-dev-server"
