
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink} from 'react-router';

class App extends Component{
	render() {
		return (
			<div>
				<ul>
					<li><IndexLink to='/'>/</IndexLink></li>
					<li><Link to='/home'>Home</Link></li>
	        		<li><Link to="/app">To app</Link></li>
	        			<li><Link to="/app/Kara">/app/Kara</Link></li>
	        		<li><Link to="/hello">Say Hello</Link></li>
				</ul>
	        	{this.props.children}
	      	</div>
		)
	}
};

class  Hello extends Component{
	render() {
		return(<div>Hello World!</div>);
	}
}

class Index extends Component {
	render(){
		return(<div><h2>Index content</h2></div>)
	}
}

class Home extends Component {
	render() {
		return (<div>Home</div>)
	}
}


class Intro extends Component {
	render() {
		return (<div>App  Content </div>)
	}
}

class IntroName extends Component {
	render() {
		return (<div>APP 的第二层链接</div>)
	}
}


render((
	<Router>
		<Route name="app" path="/" component={App}>
			<IndexRoute component={Index}/>
		    <Route path="/hello" component={Hello} />
		   	<Route path="/home" component={Home} />
		    <Route path="/app" component={Intro} />
		    <Route path="/app/:name" component={IntroName} />

		</Route>
	</Router>
	), document.getElementById("routeCon"))



























