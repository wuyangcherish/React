import React, {Component}  from 'react';
import ReactDOM from 'react-dom';

import Image from './src/image.js'

class Header extends Component {
	render(){
		return (
			<div>
				<Image/>
				<h1>这是header的文字</h1>
			</div> 
		)
	}
} 

ReactDOM.render(<Header/>, document.getElementById('header'))
