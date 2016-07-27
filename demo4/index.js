import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import "./src/index.css"

import dogPic from "./imgs/2.jpg";

class ImgCon extends Component {
	render() {
		return (
			<div>
				<img src={dogPic} className='pic' />
			</div>
		)
	}
}

ReactDOM.render(<ImgCon/>, document.getElementById("pic"));