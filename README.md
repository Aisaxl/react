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


## 07-02
### 组件概念
* 组件是`React`的基石，所有的`React`应用程序都是基于组件的。
* 之前`React`组件，使用`React.createClass`来进行声明
* 组件的return函数返回的HTML节点必需只有一个
* 可以给外部使用的组件定义：export default class ComponentHeader extends React.Component();
* 入口的定义ReactDOM.render(<Index>,document.getElementById('example'));
```JavaScript
var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';//加载header模块
class Index extends React.Component {
	render() {//数据进来首先执行render渲染基本页面组件
		return (
			<div>
				<ComponentHeader/>
				<h2>页面的主体内容</h2>
			</div>
		);
	}
}
ReactDOM.render(
<Index/>, document.getElementById('example'));
```	
### 组件（部分功能）
* export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
* import用于在一个模块中加载另一个含有export接口的模块。
	
## 07-04
### JSX内置表达式
#### JSX
* 在render方法中有一种直接把HTML嵌套在JS中的写法，它被称为JSX。这种写法类似XML，它可以定义HTML一样简洁的树状结构。这种语法结合了JavaScript和HTML的优点（我理解模版化我们编写的程序，这就是React的初衷）既可以像平常一样使用HTML，也可以在里面嵌套JavaScript语法，这种👬友好的格式，让开发者更易于阅读和开发。而且，对于组件来说，直接使用类似HTML的格式，也是非常合理的。但是，需要注意的是。JSX和HTML完全不是一回事，JSX只是作为编译器，把类似HTML的结构编译成JavaScript。
* JSX的注释是需要特别注意的，采用`{/*注释*/}`
#### JSX不是必须的
* JSX编译器把类似HTML的写法转换成原生的JavaScript方法，并且会将传入的属性转化为对应的对象。它就类似于一种语法糖，把标签类型的写法转换成`React`提供的一个用来创建 ReactElement 的方法
```JavaScript
const MyCompoment;
//input JSX,在JS中直接写成类似HTML的内容，前所未有的感觉，其实它返回的是一个ReactElement
let app = <h1 title="my title"> this is my title </h1>
//JSX转换后的结果
let app = React.createElement('h1',{title: 'my title'},'this is my title');
```

## 07-05
### 生命周期
* 每个生物😯都有它的生命周期，从出生🐣、少年、成年再到死亡。同理组件也有它特定的生命周期，React用不同的方法来描述它的整个生命周期。现在，要稍微修改一下组件的代码，当组件加载完毕1秒以后，使`like`的值自动加1
```JavaScript
...
componentDidMount(){
  setTimeout(()=>{
    this.likeCallback();
  },1000);
}
...
```
* `componentDidMount`这个方法就是在`render`完成并且组件装载完成之后调用的方法，所以界面中先显示为0，1秒以后此方法被调用，界面被重新渲染，`like`值变成了1
#### 1.组件首次加载
* `getDefaultProps`只会在装载之前调用一次，在组件中赋值的数据会被设置到`this.props`中。
* `getInitialState`只会在装载之前调用一次，这个函数的返回值会被设置到`this.state`中，需要注意的是，在ES6的写法，只需写在`constructor`中即可，如下
```JavaScript
class MyCompoment extends React.Component{
  constructor(props) {
    super(props);
    //在这里声明state
    this.state = {count: 0};
  }
}
```
* `componentWillMount`在render之前被调用，可以在渲染之前做一些准备工作。
* `render`这个方法是组件的一个必要方法。当这个方法被调用的时候，应返回一个`ReactElement`对象。`render`是一个纯函数，它的意义就是在给定相同的条件时，它的🔙返回结果应该每次都完全一致的。不应该有任何修改组件`state`的代码或者修改组件state 的代码或者是和浏览器交互的情况。
* `componentDidMount`只会在装载完成之后调用一次，在`render`之后调用，从这里开始获取组件的`DOM结构`。如果想让组件加载完毕后做一些额外的操作（比如`AJAX`请求等），可以在这个方法中添加相应代码。
#### 2.组件props更新
* 当组件接收到新的`props`的时候，会依次触发下列方法。
  * `componentWillReceiveProps(object nextProps)`，在组件接收到新的props的时候被触发，参数nextProps就是传入的新的props，你可以用它和this.props比较，来决定是否用`this.setState`实现`UI`重新渲染。
  * shouldCompentUpdate，在重新render之前被调用，可以返回一个布尔值来决定一个组件是否更新，如果返回`false`，那么前面的流程都不会被触发。这个方法默认的返回值都是`true`。
  * `render`，和组件首次加载的方法相同
  * `componentDidUpdate`，重新渲染完成以后立即调用，和`componentDidMount`类似
#### 3.组件卸载
* `componentWillUnmount`，在组件被卸载和销毁之前调用的方法，可以在这里做一些清理的工作。

---

<p align="center"><img src="http://www.kejiganhuo.tech/wp-content/uploads/2017/06/React生命周期.png" /></p>

* 探索`BodyIndex`的`componentWillMount`和`componentDidMount`生命周期
```JavaScript
import React from 'react';
export default class BodyIndex extends React.Component{
  componentWillMount(){
    //定义你的逻辑即可
    console.log("BodyIndex - componentWillMount");
  }

  componentDidMount(){
    console.log("BodyIndex - componentDidMount");
  }
  render(){
    ...
    return(
      ...
    )
  }
}

```
* 在浏览器的开发者工具中就可以看到`console`
* 再来查看Index的的`componentWillMount`和`componentDidMount`生命周期，`BodyIndex`包含在`Index`中
```JavaScript
var React = require('react');
var ReactDOM = require('react-dom');
import CompomentHeader from './components/header';
import CompomentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';
class Index extends React.Component {
  componentWillMount(){
    //定义你的逻辑即可
    console.log("Index - componentWillMount");
  }
  componentDidMount(){
    console.log("Index - componentDidMount");
  }
  render() {
    return (
      <div>
      <CompomentHeader/>
      <BodyIndex/>
      <CompomentFooter/>
      </div>
    )
  }
}

// 入口
ReactDOM.render( <Index /> , document.getElementById('example'));
```

* 在浏览器的开发者工具中就可以看到`console`,如下图


## 08-01
### State属性
* state 是组件内部的属性。组件本事是一个状态机，它可以在constructor中通过this.state直接定义它的值，然后根据这些值来渲染不同的UI。当state的值发生改变时，可以通过this.setState方法让组件再次调用render方法，来渲染新的UI。当state的值发生改变时，可以通过this.setState方法再次调用render方法，来渲染新的UI。
