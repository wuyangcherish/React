import React, {Component} from "react";
import ReactDOM from "react-dom";

import Hello from './component.jsx';

class HelloReact extends Component{
	render() {
		return (
			<Hello/>
		)
	}
}

ReactDOM.render(<HelloReact/>, document.getElementById('app'));