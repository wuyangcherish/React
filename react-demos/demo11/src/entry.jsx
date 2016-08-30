{/* es5 */}

{/*}

var React = require("react");
var ReactDOM = require('react-dom');
var $ = require('jquery');

var UserGist = React.createClass({
	getInitialState: function(){
		return {
			username:'',
			lastGistUrl:''
		}
	},

	componentDidMount: function(){
		$.get(this.props.source, function(result){
			var lastGist = result[0];
			if(this.isMounted()){
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				})
			}
		}.bind(this));
	},

	render: function(){
		return (
			<div>{this.state.username}  last gist is <a href={this.state.lastGistUrl}>here</a></div>
		)
	}
});

ReactDOM.render(<UserGist source="https://api.github.com/users/octocat/gists"/>, document.getElementById('example'));

*/}

{/* es2015*/}



import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class UserGist extends Component {
	constructor(){
		super();
		this.state={
			username: '',
			lastGistUrl:''
		}
	}

	componentDidMount() {
	 	this.serverRequest = $.get(this.props.source, (result) => {
	 		let _isMounted = true;
	 		let lastGist = result[0];
	 		if(_isMounted){
	 			this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				})
	 		}

	 	});     
	 }
	componentWillUnmount() {
		let _isMounted =false;
	}

	 render(){
	 	return (
	 		<div>{this.state.username} last gist is <a href={this.state.lastGistUrl}>Here</a></div>
	 	)
	 }
}

ReactDOM.render(<UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('example')

);


























