
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import {data} from './data';

//fetch 数据

class DataList extends Component{
	constructor(props){
        super(props);
        this.state = {
        	loading: true,
        	error: false,
            lists: null
        }
    }
	componentDidMount() {
	 	this.setState({
	 		loading: false,
	 		lists: data
	 	})
	}


	render(){
		if(this.state.loading){
			return <div><p>Loading~</p></div>
		}else if(this.state.error !== false){
			return  <p>貌似出错了~</p>
		}else{
			let result = this.state.lists;
			let res = result.map(function(res,index){
				return (
					<li key={index}>
						<p>{res.id}</p>
						<p>{res.author}</p>
						<p>{res.text}</p>
					</li>
				)
			})
			return(
				<ul>{res}</ul>
			)
		}
	}
}

class FetchApp extends Component{
	render(){
		return(
			<div>
				<h2>获取到的数据列表</h2>
				<DataList/>
			</div>
		)
	}
}

ReactDOM.render(
	<FetchApp/>, document.getElementById('root')
)