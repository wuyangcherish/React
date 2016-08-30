
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';
import 'isomorphic-fetch';

import {Router,Route, Link, browserHistory, IndexRoute} from 'react-router';

class App extends Component {
	render(){
		return(
			<div>
				<h2>App</h2>
				<ul>
					<li><Link to='/about' activeStyle={{color:"red"}}>About</Link></li>
					<li><Link to='/inbox' activeStyle={{color:"red"}}>Inbox</Link></li>
				</ul>
				{this.props.children}
			</div>
			
		)
	}
}

class About extends Component{
	render(){
		return(
			<h3>This is About Page</h3>
		)
	}
}

class Inbox extends Component{
	constructor(props){
		super(props);
		this.state={
			inboxData: null
		}
	}

	componentDidMount() {
	 	this.fetchInboxData();     
	}

	componentDidUpdate(prevProps, prevState) {
	 	let oldId = prevProps.params.InboxId;
	 	let newId = prevProps.params.InboxId;
	 	if(oldId !== newId){
	 		this.fetchInboxData();
	 	}    
	}

	componentWillUnmount() {
	 	this.ignoreLastFetch = true;
	}

	fetchInboxData(){
		let url = 'http://rap.taobao.org/mockjs/6646/test/getData?';
		var _that = this;
		fetch(url)
			.then(function(res){
				if(res.status >= 400){
					throw new Error('出错了')
				}
				return res.json();	
			})
			.then(function(data){
				if(!_that.ignoreLastFetch){
					_that.setState({
						inboxData: data
					})
				}

			})
	}

	render(){
		return(
			<div>
				<InboxView data={this.state.inboxData}/>
			</div>
		)
	}
}

class InboxView extends Component {
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.data == null){
			console.log("正在获取数据ing~")
			return(
				<p>Loading</p>
			)
		}else{
			let res = this.props.data;
			return(
				<div>
					<p>{res.id}</p>
					<p>{res.title}</p>
					<p>{res.author}</p>
					<p>{res.text}</p>
				</div>
			)
		}
	}
}

class Dashboard extends Component {
	render(){
		return(
			<h1>Welcome to the app</h1>
		)
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Dashboard}/>
			<Route path='about' component={About}/>
			<Route path='inbox' component={Inbox} />
		</Route>
	</Router>
,document.getElementById('root'))

