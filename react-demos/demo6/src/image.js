import React, {Component} from 'react';
import './index.css'

export default class Image extends Component {
	render(){
		return (
			<img src="http://facebook.github.io/react/img/logo_og.png" className="pic"/>
			// <h2>我是个测试文件 </h2>   //正常运行的
		)
	}
}