import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

export default class TodoLists extends Component{
	constructor(props){
		super(props);
	}
	handleDel(index){
		this.props.data.splice(index,1);
		this.props.onDel(this.props.data);
	}
	render(){
		// console.log("TodoList props is",this.props);
		var results = this.props.data;
		// console.log("TodoList props is",results);
		if(results.length === 0){
			return(
				<p>Empty Lists</p>
			)
		}else{
			var _that = this;
			var lists = results.map(function(item,index){
				return(
					<TodoItem key={index} data={item} index={index} deleteTodo={_that.handleDel.bind(_that)}/>
				)
			})
		}
		return (
			<ul>{lists}</ul>
		)
	}
}