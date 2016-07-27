import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';
import {createHistory, useBasename} from 'history';

const ACTIVE = {color:'#cc0000'}

class App extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to='/' activeStyle={ACTIVE}>/</Link></li>
					<li><IndexLink to='/' activeStyle={ACTIVE}>/ IndexLink </IndexLink></li>
					<li><Link to='/users' activeStyle={ACTIVE}>/users</Link></li>
					<li><IndexLink to='/users' activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>
					<li><Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          			<li><Link to="/users/ryan?foo=bar" query={{ foo: 'bar' }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>
					<li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

class Index extends Component {
	render(){
		return(<div><h2>Index content</h2></div>)
	}
}


class Users extends Component {
	render() {
		return (<div><h2>Users</h2></div>)
	}
}


class UsersIndex extends Component {
	render() {
		return (<div><h3>UsersIndex</h3></div>)
	}
}


class User extends Component {
	render() {
		return (<div><h3>User {this.props.params.id}</h3></div>)
	}
}

class About extends Component {
	render() {
		return (<div><h2>About</h2></div>)
	}
}

const history = useBasename(createHistory) ({
	basename:'/active-links'
})

render((
	<Router history={history}>
	    <Route path="/" component={App}>
		      <IndexRoute component={Index}/>
		      <Route path="/about" component={About}/>
		      <Route path="users" component={Users}>
			        <IndexRoute component={UsersIndex}/>
			        <Route path="/:name" component={User}/>
		      </Route>
	    </Route>
  </Router>
	),document.getElementById("routeCon"))
























