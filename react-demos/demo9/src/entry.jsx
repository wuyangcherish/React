{/*es5*/}

{/*var React = require("react");
var ReactDOM = require("react-dom");
require('./index.css')

var Input = React.createClass({
	getInitialState: function(){
		return{value: "hello es5"}
	},

	handleChange: function(event){
		this.setState({value: event.target.value})
	},

	render: function(){
		var value = this.state.value;
		return(
			<div className="container">
				<input type="text" className='ipt' value={value} onChange={this.handleChange} />
				<p className="value">{value}</p>
			</div>
		)
	}
})

ReactDOM.render(<Input />, document.getElementById('example'));
*/}

{/*es6 写法*/}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Input extends Component {
	constructor(){
		super();
		this.state={
			value: 'Hello es2015'
		}
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}
	
	render(){
		let value = this.state.value;
		return(
			<div className="container">
				<input type="text" className='ipt' value={value} onChange={this.handleChange.bind(this)} />
				<p className="value">{value}</p>
			</div>
		)
	}
}

ReactDOM.render(<Input />, document.getElementById('example'));























