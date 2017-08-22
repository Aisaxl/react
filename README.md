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
 * sudo npm install save react react-dom babelify babel-parset-react
 * npm install --save babel-prese es2015
  
## 03-03
### webpack安装
* npm install -g webpack (webpack安装)
* npm install -g webpack-dev-server (开发的服务器)

#### webpack插件
* npm install webpack-dev-server　--save
* npm install webpack --save
* npm install --save babel-preset-react
* npm install babel-loader --save

### webpack运行
* webpack
* webpack-dev-server (查看运行地址)


## 07-01
### React虚拟DOM概念
#### 虚拟DOM的结构
* 在传统的 Web 应用中，我们往往会把数据的变化实时地更新到用户界面中，于是每次数据的微小变动都会引起 DOM 树的重新渲染。如果当前 DOM 结构较为复杂，频繁的操作很可能会引发性能问题。React 为了解决这个问题，引入了虚拟 DOM 技术。
<p align="center"><img src="https://www.ibm.com/developerworks/cn/web/1509_dongyue_react/index6639.png" /></p>

* 虚拟 DOM 是一个 JavaScript 的树形结构，包含了 React 元素和模块。组件的 DOM 结构就是映射到对应的虚拟 DOM 上，React 通过渲染虚拟 DOM 到浏览器，使得用户界面得以显示。与此同时，React 在虚拟的 DOM 上实现了一个 diff 算法，当要更新组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以在 React 中，当页面发生变化时实际上不是真的渲染整个 DOM
* React 虚拟 DOM 中的诸多如 div 一类的标签与实际 DOM 中的 div 是相互独立的两个概念，它是一个纯粹的 JS 数据结构，它只是提供了一个与 DOM 类似的 Tag 和 API。React 会通过自身的逻辑和算法，转化为真正的 DOM 节点。也正是因为这样的结构，虚拟 DOM 的性能要比原生 DOM 快很多。
