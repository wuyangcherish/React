#### Demo

1. 输出字符串
2. 渲染列表 + css
3. 加载组件
4. 输出图片【图片小于10000的时候输出Base64位编码的图】
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
18. react-router demo1 --最基本的路由
19. react-router demo2 --IndexRoute + 嵌套路由
20. react-router demo3 --Form表单提交
21. react-router demo4 --fetch 数据
22. react 评论框 + localStorage
23. react 评论框 + fireBase
24. react 动画
25. <del style="color:#9dd;">服务器端渲染</del>
26. todoList+mocha

#### demo22

用``localStorage`` 永久性的存储评论在本地，最不好的就是别人的机子上面无法访问到我存储的数据，至于练手。那么就先总结下，省的以后忘了

首先创建一个``KEY`` 值。例如：``const key = "COMMENTS"``  然后进行数据的存储和输出

存储：
首先定义一个对象用来存储该数据。每次存的时候判断下是否有这个key值，如果有就直接存储，如果没的话就将初始化的数据先存进去。

然后就是暴露出两个方法，一个是获取所有数据的接口，一个是存数据的接口 这样只需调用这两个接口就可以了。


#### demo23

在 demo23 里面使用了云后端 ``firebase`` 来实现实时数据库，说实话没太接触过后端的我， 看了整整一天才有点小收获~

总结错误~~  因为这个项目是用 webpack + nodes 搞得。所以一开始我没注意到应该 ``install  firebase`` 而是选择了在 ``index.html`` 里面引入``script`` 文件，导致在 ``index.jsx`` 里面总是报错说 ``firebase is not define`` 最后``nam install firebase`` 之后再去看firebase 就正常了

接下来就是firebase 的初始化了：

```
    // 初始化
    firebase.initializeApp({
        databaseURL: "https://test-6ba90.firebaseio.com",
        serviceAccount: "path/to/firebase.json"
    });
    //下面这两行是以后得代码会用到的，先用变量存起来
    var db = firebase.database();
    var ref = db.ref("comments/");
```

初始化好了之后就是进行数据的存储和获取了：

在这个小demo 里面我首先写的存数据

存数据用``push`` 即可,因为作为一个评论框，存进去的数据必然不能覆盖掉之前的数据，所以选push

```
	writeCommentsData(data){
		firebase.database().ref('comments/').push({
			username:data.username,
			imgSrc:data.imgSrc,
			text:data.text
		})
	}
```
这就是存数据的过程，其中'comments/'是一个大的对象，所有的评论都存在这个大对象的下面，data 则是传过来需要存储的数据。

接下来就是取数据了：

取数据应该是在组件加载完成之后便开始获取数据并显示，所以我放在了 ``componentDidMount`` 这个里面，``firebase`` 里面有一个``once`` 的方法，刚好可以用在初始化的时候。代码如下：

```
    ref.once('value', function(snapshot){
	 	  // console.log(snapshot.val());
	 	  _that.setState({
	 		    indeboxData: snapshot.val()
	 	  })
	 })
```
上面就实现了在初始化的时候将数据库中的数据显示出来

当有新的评论时候，肯定是要触发一个事件，然后将元素显示出来并且保存到数据库中了~  保存到数据库中可以直接使用上面的push 方法。要显示到组件上，那么势必要使用``setState`` 来改变原本的数据。所以代码如下：

```
    ref.on('value', function(snapshot){
			_that.setState({
	 			indeboxData: snapshot.val()
	 		})
		})
```

上面用到的监听方法。value的话是监听‘comments/’这个某下面的素有子节点，如果有改动则触发该事件。

这下子就实现了简单的试试数据更新。

PS: 还有很多没有学习到，后面继续~


#### demo24

说下动画的东东

首先得安装一个依赖 ``react-addons-css-transition-group`` 然后在该文件中引入

```
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
or 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
```

动画的组件写法是：

```
<ReactCSSTransitionGroup transitionName='example' 
	transitionEnterTimeout={500} transitionLeaveTimeout={300}
    transitionAppear={true} transitionAppearTimeout={500}
	component="ul" className="lists">
	{items}
</ReactCSSTransitionGroup>
 ```
 
像这样~ 应该注意的是：

1. transitionName -> 就是后面css 的类名
2. 默认情况下 ``ReactCSSTransitionGroup`` 是一个``span`` 标签。所以如果想变化的话，需加入``component="你想让它成为的标签"``
3. 里面只能写你需要变化的组件部分。如果有嵌套，将无法实现``enter leave``的动画，但是``appear``的动画是可是实现的，具体原因。再看看~
4. 默认情况下 ``transitionAppear`` 为 false 所以要先设置为true 才可以。
5. ``ReactCSSTransitionGroup`` 的自己一定要有``key`` 这个值


