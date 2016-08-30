{/*es5*/}
{/*
var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({

	getInitialState() {
	    return {
	        opacity:1.0  
	    };
	},

	componentDidMount: function(){
		this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
              opacity = 1.0;
            }
            this.setState({
              opacity: opacity
            });
          }.bind(this), 100);
	},

	render: function(){
		return(
			<div style={{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</div>
		)
	}
});

ReactDOM.render(
	<Hello name='world' />, document.getElementById('example')
)

*/}

{/*es2015*/}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Hello  extends Component {
	constructor(){
		super();
		this.state={
			opacity: 1.0
		}
	}

	componentDidMount() {
	    this.timer = setInterval(function(){
	    	let opacity = this.state.opacity;
	      	{/*透明度递减--知道快消失的时候立马变回1.0*/}
	      	opacity -= 0.05;
	      	if(opacity < 0.1){
	      		opacity= 1.0
	      	}
	      	this.setState({
	      		opacity:opacity
	      	})
	     }.bind(this), 100)
	}

	render() {
		return (
			<div style={{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</div>
		)
	}
} 

ReactDOM.render(<Hello name="Hello ES2015" />, document.getElementById('example'));






















