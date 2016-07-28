### React


#### 资料
1. [react-router gitBook](https://react-guide.github.io/react-router-cn/docs/Introduction.html)
2. [react-router 2.0.x 版本变化的地](https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-history-with-router)
3. [阮一峰的react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
4. [React 教程合集](http://react-china.org/c/jiao-cheng)


#### 重点
1. componentDidMount： 
	* 组件加载完之后立即执行，可以通过this.getDOMNode() 来访问 DOM 结构，
  	* 在该方法里面可以执行 setInterval setTimeout 等操作 或者发送Ajax 请求 

#### 遇到的问题
1. 表示 React-Router  是个大坑~ :( v0.13.x  和后面v1.0笨笨以上的差距太大，导致我写的东东得重新改一下
	* [版本写法对照表](https://github.com/reactjs/react-router/blob/832c42946c874fe56ffde0066b1088054311cb98/CHANGES.md)  
2. Uncaught TypeError: (0 , _classnames2.default) is not a function ---尚未解决
3. super(props)有什么作用：
	* 这个是用来调用父类的构造函数，子类必须在constructor方法中调用 super()， 否则构建实例会报错，这是因为子类没有自己的this对象。而是继承父类的this,所以没有super(),就没有this.

