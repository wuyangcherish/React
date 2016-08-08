import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import './index.css'

export default class Header extends Component {
	render(){
		return(
			<div calssName="header">
				<h1>我是来自index.jsx 的文字,测试下这个工具的实时刷新功能~</h1>
				<App/>
			</div>
		)
	}
}

ReactDOM.render(<Header/>, document.getElementById('example'))