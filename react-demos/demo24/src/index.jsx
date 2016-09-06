
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TodoList extends Component{
	constructor(){
		super();
		this.state={
			items:['hello','world','banana','apple','pear']
		}
	}

	handleAdd(){
		let value = this.refs.ipt.value;
		
		if(value !==''){
			this.state.items.push(value);
			this.setState({
				items:this.state.items
			})
			this.refs.ipt.value = '';
		}	
	}

	handleDel(){
		let newVal = this.state.items.slice(0,this.state.items.length-1);
		this.setState({
			items: newVal
		})
	}


	render(){
		let items = this.state.items.map(function(item,index){
			return(
				<li key={index}>{item}</li>
			)
		})

		return(
			<div className="container">
				<input type="text" ref="ipt"/>
				<button onClick={this.handleAdd.bind(this)} className="btn">Add</button>
				<button onClick={this.handleDel.bind(this)} className="btn">Del</button>

				<ReactCSSTransitionGroup transitionName='example' 
				transitionEnterTimeout={500} transitionLeaveTimeout={300}
				transitionAppear={true} transitionAppearTimeout={500}
				component="ul" className="lists">
					{items}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

ReactDOM.render(<TodoList/>,document.getElementById('root'));