import React, {Component} from "react";
import ReactDOM from "react-dom";

import styles from "./index.css";

class List extends Component {
	render() {
		return (
			<ul>
				<li>first line</li>
				<li>second line</li>
				<li>third line</li>
			</ul>
		)
	}
}

ReactDOM.render(<List/>, document.getElementById("app"));