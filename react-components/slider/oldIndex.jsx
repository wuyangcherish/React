
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {imgData} from './data';
import './index.css';

class Slider extends Component {

	// 通过改变他的 left 值来控制它的移动

	constructor(props){
		super(props);
		this.state={
			currentIdx:0,
			currentLeft:0, //初始化ul 的位置
			count:3, //数据的长度
			timer :null
		}
	}

	componentDidMount(){
		var _that = this;
	 	_that.state.timer = setInterval(function(){
	 		let now = _that.state.currentIdx+1;
			//如果 now < 0 则让他点击失效
			if(now < 0){
				now = 0;
				console.log("前面没有啦")
			}
			if(now >=3) {
				now = now - _that.state.count;
			}
			_that.setState({
				currentIdx:now
			})
	 	},3000)
	}

	getClass(){
		return {
			width:1920+'px',
			left:this.state.currentIdx * (-640) +'px'
		}
	}

	turnToPrev(){
		let now = this.state.currentIdx-1;
		//如果 now < 0 则让他点击失效
		if(now < 0){
			now = 0;
			console.log("前面没有啦")
		}
		if(now >=3) {
			now = now - this.state.count;
		}
		this.setState({
			currentIdx:now
		})
	}
	turnToNext(){
		let now = this.state.currentIdx+1;
		//如果 now < 0 则让他点击失效
		if(now < 0){
			now = 0;
			console.log("前面没有啦")
		}
		if(now >=3) {
			now = now - this.state.count;
		}
		this.setState({
			currentIdx:now
		})
	}

	render(){
		let data = imgData.map(function(item,index){
			return(
				<li key={index}><a href={item.href}><img src={item.imgsrc} alt="" /></a></li>
			)
		})
		return(
			<div className="container">
				<div className="slider-wrap" >
					<ul className="clearfix slide-animate" style={this.getClass()}>
						{data}
					</ul>
				</div>
				<button className="btn" onClick={this.turnToPrev.bind(this)}>&lArr;</button>
				<button className="btn" onClick={this.turnToNext.bind(this)}>&rArr;</button>
			</div>
		)
	}
}





ReactDOM.render(<Slider/>,document.getElementById('slider'))