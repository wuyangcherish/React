
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Router,Route, Link, browserHistory, IndexRoute} from 'react-router';

class App extends Component {
	render(){
		return(
			<div>
				<h2>App</h2>
				<ul>
					<li><Link to='/about' activeStyle={{color:"red"}}>About</Link></li>
					<li><Link to='/inbox'>Inbox</Link></li>
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
	/*handleSubmit(event){
		event.preventDefault();
		const username = event.target.elements[0].value;
		const repo = event.target.elements[1].value;
		const path = `/repos/${username}/${repo}`;
		browserHistory.push(path);
		// console.log(event.target.elements)
	}*/

	static contextTypes = {
    	router: React.PropTypes.object
  	}

  	handleSubmit(event){
		event.preventDefault();
		const username = event.target.elements[0].value;
		const repo = event.target.elements[1].value;
		const path = `/repos/${username}/${repo}`;
		this.context.router.push(path);
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
				  <input type="text" placeholder="userName"/><br/>
				  <input type="text" placeholder="repo"/><br/>
				  <button type="submit">Go</button>
				</form>
			</div>
		)
	}
}

class Repos extends Component {
	render(){
		return(
			<div>
				<p>跳转到 repos/ 链接了</p>
			</div>	
			
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
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Dashboard}/>
			<Route path='about' component={About}/>
			<Route path='inbox' component={Inbox} />
			<Route path='/repos/*' component={Repos} />
		</Route>
	</Router>
,document.getElementById('root'))

