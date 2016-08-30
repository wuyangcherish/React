
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router,Route, Link, hashHistory, IndexRoute} from 'react-router';

class App extends Component {
	render(){
		return(
			<div>
				<h2>App</h2>
				<ul>
					<li><Link to='/about' activeStyle={{color:"red"}}>About</Link></li>
					<li><Link to='/inbox'>Inbox</Link></li>
					<li><Link to='/inbox/message/239'>Message</Link></li>
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
	render(){
		return(
			<div>
				<h3>This is Inbox Page</h3>
				{this.props.children}
			</div>
		)
	}
}

class Message extends Component {
	render() {
		return(
			<p>This is message id: {this.props.params.id}</p>
		)
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
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Dashboard}/>
			<Route path='about' component={About}/>
			<Route path='inbox' component={Inbox}>
				<Route path='/inbox/message/:id' component={Message}/>
			</Route>
		</Route>
	</Router>
,document.getElementById('root'))


























