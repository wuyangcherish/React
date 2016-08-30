
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

class App extends Component{
	render(){
		return(
			<div>
				<h1>React Router</h1>
				<ul>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/inbox'>Inbox</Link></li>
					<li><Link to='/inbox/messages/23'>Message/23</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

class About extends Component{
	render(){
		return(
			<h3>About Content</h3>
		)
	}
}

class Inbox extends Component{
	render(){
		return(
			<div>
				<h2>Inbox</h2>
				{this.props.children || "welcome to your Inbox"}
			</div>
		)
	}
}

class Message extends Component{
	render(){
		return(
			<h3>Message parmas id is: {this.props.params.id}</h3>
		)
	}
}


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>

			<Route path='about' component={About}/>
			<Route path='inbox' component={Inbox}>
				<Route path='messages/:id' component={Message}/>
			</Route>

		</Route>
	</Router>
,document.getElementById('root'))





















