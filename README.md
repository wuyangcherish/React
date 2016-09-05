### React

#### 资料
1. [react-demos 阮一峰](https://github.com/ruanyf/react-demos/)
1. [react-router gitBook](https://react-guide.github.io/react-router-cn/docs/Introduction.html)
2. [react-router 2.0.x 版本变化](https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-history-with-router)
3. [阮一峰的react-router](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
4. [React 教程合集](http://react-china.org/c/jiao-cheng)
5. [Promise 迷你书](http://liubin.org/promises-book)
6. [isomorphic-fetch的用法](https://github.com/matthew-andrews/isomorphic-fetch)
6. [React 简介与原理](http://anjia.github.io/2015/07/24/fe_react)
7. [怎么样更好的理解虚拟DOM](http://www.zhihu.com/question/29504639/answer/44680878)
8. [React Native ES5 和 ES6 写法对照](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
9. [localStorage --setItem](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem)


#### 重点
###### componentDidMount： 

组件加载完之后立即执行，可以通过this.getDOMNode() 来访问 DOM 结构，
在该方法里面可以执行 setInterval setTimeout 等操作 或者发送Ajax 请求 

#### 遇到的问题
###### 表示 React-Router  是个大坑~ :( v0.13.x  和后面v1.0, v2.x版本以上的差距太大，导致我写的东东得重新写一次

[版本写法对照表](https://github.com/reactjs/react-router/blob/832c42946c874fe56ffde0066b1088054311cb98/CHANGES.md)  
###### super(props)有什么作用：

这个是用来调用父类的构造函数，子类必须在constructor方法中调用 super()， 否则构建实例会报错，这是因为子类没有自己的this对象。而是继承父类的this,所以没有super(),就没有this.

###### [无法识别react 的语法](http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token)

或者说是依赖都安装好了，但是还是无法识别，其原因在于忘记写<code>.babelrc 文件了</code>

###### 有关ajax 在es6中的写法和在5中的区别:

```
	es5:
		Foo.prototype.ajax=function(){
			$.get('http://foo/bar.com', function(res){
				//这里的this指的不是当前的对象,所以要加bind
				this.otherMethod();
			}.bind(this))
		}
```

```
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
```


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

#### 笔记

###### Virtual DOM 算法

实现：
    1. 用 JS 构建虚拟 DOM 树
    2. 比较两颗虚拟 DOM 树的差异
    3. 把差异的部分作为新的DOM 树渲染出来

实现的算法是： diff 算法。实现复杂度为：O(n^3), 但是在前端中，很少有跨层级移动DOM 元素，所以 Virtual DOM 只会对同一个层级的 DOM 元素进行比较，这样话算法复杂度就变为了O(n).
	
	
###### React-Router 

v0.1 版本和 v0.2 版本的区别导致的问题，因为这两个版本的写法用法差异性较大，所以用的时候要注意。 贴着连接以后好找[uprade-guides](https://github.com/reactjs/react-router/tree/master/upgrade-guides)，上面资料2 也有写。

``{this.props.children}`` 这个的用法：这个是用来显示路由下面的内容的，比如


```
    <ul>
	    <li><Link to='/about'>About</Link></li>
	    <li><Link to='/inbox'>Inbox</Link></li>
        <li><Link to='/inbox/messages/23'>Message/23</Link></li>
    </ul>
	{this.props.children}
```

上面的``{this.props.children}`` 就是用来显示路由 ``/About, /Inbox`` 所对应的内容的， ``/Inbox/message/23`` 对应的是一个子路由，它是在页面/Inbox 的基础上面分出来的路由。在``/Inbox`` 所对应的组件下面摁钉也有一个相同的``{this.props.children}``来显示该子路由组件, 如下：

```
    class Inbox extends Component{
        render(){
            return(
                <h1>Inbox Content</h1>
                {this.props.children || "Hello Inbox"}
               )
        }
    }
```
当然这个``"Hello Inbox"`` 的这一项内容可以没的

还有一个注意的是 ``/inbox/message/23`` 对应的路由应该是 ``/inbox/message/:id``

因为一开始对应的路由没有写，所以可以用 ``<IndexRoute component={}>`` 来对应路由 ``'/'``

对于选中连接的样式可以直接使用 ``activeStyle={{}}`` 或者 ``activeClassName`` 的形式定义。而不需要自己判断是否选中

但是像上述的这种情况不适用与连接到根路由的情况，因为他会使得``activeStyle``和``activeClassName``失效，它会匹配任何的子路由，所以会一高亮,这个时候就需要用``IndexLink``这个精确匹配来实现.或者加上 ``onlyActiveOnIndex={true}`` 这个属性

``hashHistory`` 的是通过 URL 的hash 部分（#）来进行切换的。url 的形式如下所示：

![images](http://7xlqb6.com1.z0.glb.clouddn.com/react-router-history.png)
 
 
而 ``browserHistory`` 则没有上面的（#）它显示出来的是正常的页面跳转链接，如下图所示：

![images](http://7xlqb6.com1.z0.glb.clouddn.com/react-router-browserHistory.png)


###### localStorage

在demo22 的评论demo 里面用到了 localStorage的getItem和setItem,因为还没搞到数据库那些东西，所以暂时先用这个代替下。


