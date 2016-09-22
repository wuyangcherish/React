import React, {Component} from 'react';
import TodoList from './TodoLists';
import AddTodo from './AddTodo';

export default class App extends Component{
	constructor(){
		super();
		this.state={
			data:["first thing","second things"]
		}
	}
	onDataChange(newData){
		// console.info("传回父级的value值是:",newData);
		this.setState({
			data: newData
		})
	}

	render(){
		return(
			<div>
				<h1>Todos</h1>
				<AddTodo data={this.state.data} onAdd={this.onDataChange.bind(this)}/>
		        <TodoList data={this.state.data} onDel={this.onDataChange.bind(this)}/>
			</div>
		)
	}
}
