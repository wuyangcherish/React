### React

#### Demo

1. 输出字符串
2. 渲染列表 + css
3. 加载组件
4. 输出图片【图片小鱼10000的时候输出Base64位编码的图】
5. <del style="color:#9dd;">react-router</del>
6. header demo
7. <del style="color:#9dd;">同demo5</del>
8. 改变State状态
9. 数据双向绑定
10. 定时器控制文字的显示与隐藏
11. $get 远程数据
12. 数据循环输出
13. 计数器
14. ReactHover 插件应用
15. 将焦点放到input上
16. 导航栏【配置貌似出现了一些问题】
17. 远程获取数据
18. react-router demo


#### 资料
1. [react-demos 阮一峰](https://github.com/ruanyf/react-demos/)
1. [react-router gitBook](https://react-guide.github.io/react-router-cn/docs/Introduction.html)
2. [react-router 2.0.x 版本变化](https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-history-with-router)
3. [阮一峰的react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
4. [React 教程合集](http://react-china.org/c/jiao-cheng)
5. [Promise 迷你书](http://liubin.org/promises-book)
6. [React 简介与原理](http://anjia.github.io/2015/07/24/fe_react)
7. [怎么样更好的理解虚拟DOM](http://www.zhihu.com/question/29504639/answer/44680878)


#### 重点
###### componentDidMount： 

组件加载完之后立即执行，可以通过this.getDOMNode() 来访问 DOM 结构，
在该方法里面可以执行 setInterval setTimeout 等操作 或者发送Ajax 请求 

#### 遇到的问题
###### 表示 React-Router  是个大坑~ :( v0.13.x  和后面v1.0, v2.x版本以上的差距太大，导致我写的东东得重新写一次

[版本写法对照表](https://github.com/reactjs/react-router/blob/832c42946c874fe56ffde0066b1088054311cb98/CHANGES.md)  
###### super(props)有什么作用：

这个是用来调用父类的构造函数，子类必须在constructor方法中调用 super()， 否则构建实例会报错，这是因为子类没有自己的this对象。而是继承父类的this,所以没有super(),就没有this.

####### [无法识别react 的语法](http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token)

或者说是依赖都安装好了，但是还是无法识别，其原因在于忘记写<code>.babelrc 文件了</code>

###### 有关ajax 在es6中的写法和在5中的区别:
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

###### 有关<code>isMounted()</code>这个属性在es6 下面报错的问题

[官网](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html) 是这么说的
	
###### Uncaught TypeError: Cannot read property 'handleClick' of undefined

这个问题就是this指向的问题导致的：例如下面的函数
<pre>
Data.tabData.map(function(item,index){
	return(
	&lt;li key={index} 
	onClick={this.handleClick.bind(this)}&gt;{item.tit}</li>
	)
})	
</pre>

这样写的话就会导致外面定义的handleClick 出现上面的错误，解决方法是将 <code>this</code> 传进去 写法如下：

<pre>
Data.tabData.map(function(item,index){
	return(
	&lt; li key={index} onClick={this.handleClick.bind(this)}&gt;{item.tit}</li>
	)
}, <font color="red">this</font>)
</pre>

Stack Overflow 答案：[函数undefined](http://stackoverflow.com/questions/29549375/react-0-13-class-method-undefined)

###### Virtual DOM 算法

实现：
    1. 用 JS 构建虚拟 DOM 树
    2. 比较两颗虚拟 DOM 树的差异
    3. 把差异的部分作为新的DOM 树渲染出来

实现的算法是： diff 算法。实现复杂度为：O(n^3), 但是在前端中，很少有跨层级移动DOM 元素，所以 Virtual DOM 只会对同一个层级的 DOM 元素进行比较，这样话算法复杂度就变为了O(n).
	





