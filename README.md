<h1 align="center">React学习笔记📒</h1>
<p align="center"><img src="http://www.kejiganhuo.tech/wp-content/uploads/2017/06/bg2015033101.png" /></p>

* 知识来源：
* 慕课网：React.js入门与案例开发
* 《React全栈-Redux+Flux+webpack+Babel整合开发》
* [Redux中文文档](http://cn.redux.js.org/)
* [React Router](http://react-guide.github.io/react-router-cn/docs/API.html)
* [React Router 4中文文档](http://618cj.com/react-router4-0路由中文文档api/)

## 知识点目录

### 01

* [01-01](https://github.com/Aisaxl/react#01-01) `基础知识目录与相关版本`

### 02

* [02-01](https://github.com/Aisaxl/react#02-01) `React简介`
* [02-02](https://github.com/Aisaxl/react#02-02) `其他知识梳理`

### 03

* [03-01](https://github.com/Aisaxl/react#03-01) Git提交文件五大步骤
* [03-02](https://github.com/Aisaxl/react#03-02) Npm
* [03-03](https://github.com/Aisaxl/react#03-03) Webpack

---
# 学习进度
## 01-01
### 基础知识目录与相关版本
* React
* ES2015
* WebPack2
* Atom

## 02-01
### React简介
* React 是近期非常热门的一个前端开发框架，其本身作为 MVC 中的 View 层可以用来构建 UI，也可以以插件的形式应用到 Web 应用非 UI 部分的构建中，轻松实现与其他 JS 框架的整合，比如 AngularJS。同时，React 通过对虚拟 DOM 中的微操作来实对现实际 DOM 的局部更新，提高性能。其组件的模块化开发提高了代码的可维护性。单向数据流的特点，让每个模块根据数据量自动更新，让开发者可以只专注于数据部分，改善程序的可预测性。
* Facebook内部用来开发Instagram
* JavaScript MVC框架
* 2013年开源React
* 随后发布React Native
* React Github [React](http://www.github.com/facebook/react)

## 02-02
### 其他知识梳理
* JavaScript
* ES5/ES6
* NodeJS
* HTML
* CSS
* 相关知识请看我的博客前端开发基础知识部分[科技干货-Blog](http://www.kejiganhuo.tech)

## 03-01
### Git提交文件五大步骤
* Git init 命令把这个目录变成Git可以管理的仓库
* Git add "文件名"  将文件添加到仓库
* Git commit -a -m "文件信息" 将文件提交到仓库
* Git remote rm origin  "远程地址（将远程上的地址拉下来）"
* Git  pull origin master 
* Git  pash origin master

## 03-02
### npm
#### npm init项目初始化
	每一个npm包都必须有一个package.json文件。只需要执行npm init即可，以交互方式完成package.json的创建。
	npm install(简写npm i)的三个选项 
	* -global 简写 -g
  * -save   简写 -S
  * -save-dev 简写 -D
  
#### 项目依赖包案装
  sudo npm install save react react-dom babelify babel-parset-react
	npm install --save babel-prese es2015
  
## 03-03
### webpack安装
* npm install -g webpack (webpack安装)
* npm install -g webpack-dev-server (开发的服务器)
#### webpack插件
* npm install webpack-dev-server　--save
* npm install webpack --save
* npm install --save babel-preset-react
* npm install babel-loader --save

