import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends Component{
	constructor(props){
		super(props);
	}
	handleDel(index){
		this.props.deleteTodo(index)
	}
	render(){

		// console.info("TodoItem 从父级继承的props", this.props);
		
		return(
			<li key={this.props.index}>
				<span>{this.props.data}</span>
				<button onClick={this.handleDel.bind(this,this.props.index)}>delete</button>
			</li>
		)

	}
}