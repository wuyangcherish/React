### React


#### 资料
1. [react-demos 阮一峰](https://github.com/ruanyf/react-demos/)
1. [react-router gitBook](https://react-guide.github.io/react-router-cn/docs/Introduction.html)
2. [react-router 2.0.x 版本变化](https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-history-with-router)
3. [阮一峰的react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
4. [React 教程合集](http://react-china.org/c/jiao-cheng)
5. [Promise 迷你书](http://liubin.org/promises-book)


#### 重点
1. componentDidMount： 
	* 组件加载完之后立即执行，可以通过this.getDOMNode() 来访问 DOM 结构，
  	* 在该方法里面可以执行 setInterval setTimeout 等操作 或者发送Ajax 请求 

#### 遇到的问题
1. 表示 React-Router  是个大坑~ :( v0.13.x  和后面v1.0, v2.x版本以上的差距太大，导致我写的东东得重新写一次
	* [版本写法对照表](https://github.com/reactjs/react-router/blob/832c42946c874fe56ffde0066b1088054311cb98/CHANGES.md)  
2. super(props)有什么作用：
	* 这个是用来调用父类的构造函数，子类必须在constructor方法中调用 super()， 否则构建实例会报错，这是因为子类没有自己的this对象。而是继承父类的this,所以没有super(),就没有this.
3. [无法识别react 的语法](http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token)
	* 或者说是以来都安装好了，但是还是无法识别，其原因在于忘记写<code>.babelrc 文件了</code>

4. 有关ajax 在es6中的写法和在5中的区别:
	<pre>
	es5:
		Foo.prototype.ajax=function(){
			$.get('http://foo/bar.com', function(res){
				//这里的this指的不是当前的对象,所以要加bind
				this.otherMethod();
			}.bind(this))
		}
	</pre>
	<pre>
	es6:
		class Foo {
			ajax() {
				$.get('http://foo/bar', res=> {
					//这里的this指的是当前对象，而不是ajax对象
					this.otherMethod();
				})
			}
		}
	</pre>


	在demo11中。es5中的this 指向：es6代码中this指向： UserGist

5. 有关<code>isMounted()</code>这个属性在es6 下面报错的问题
	* [官网](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html) 是这么说的

	





