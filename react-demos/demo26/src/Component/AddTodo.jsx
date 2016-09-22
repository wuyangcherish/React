import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		}
	}
	addLists(){
		// console.info("AddTodo 父级传过来的props", this.props)
		let value = this.refs.ipt.value;
		if(!value){	
			console.warn('输入文字为空 请先填写')
			return false;
		}
		this.props.data.push(value);
		const newData = this.props.data;
		this.props.onAdd(newData);
		this.refs.ipt.value = '';
	}
	render(){
		return(
			<div>
				<input type='text' ref='ipt'/>
				<button className="btn" onClick={this.addLists.bind(this)}>添加</button>
			</div>
		)
	}
}