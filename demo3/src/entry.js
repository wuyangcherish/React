import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Title from "./component.jsx";

//列表组件
class List extends Component {
	render() {
		return(
			<div>
				<Title/>
				<ul>
					<li>first line</li>
					<li>second line</li>
					<li>Third line</li>
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<List/>, document.getElementById("app"));