
import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import {commentData} from './data';

import './css/index';

class CommentsContents extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="comment-wrap">
				<CommentList data={this.props.data}/>
			</div>
		)
	}
}

class CommentList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.data == null){
			return(
				<p>评论正在努力的加载中~</p>
			)
		}else{
			let res = this.props.data;
			console.log('现在的data 是',res)
			var list = res.map(function(item,index){
				return(
					<li key={index}>
						<div className="pic-wrap">
							<img src={item.imgSrc}/>
						</div>
						<div className="comment">
							<h5 className="username">{item.username}</h5>
							<p className="content">{item.text}</p>
						</div>
					</li>	
				)
			})
		}
		return(
			<ul>{list}</ul>
		)
	}
}


class CommentsBox extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.log("CommentsBox", this.props)
	}
	handleSubmit(event){

		event.preventDefault();
		const commentContent = event.target.elements[0].value;
		const data={
				imgSrc:'http://7xlqb6.com1.z0.glb.clouddn.com/user.jpg',
				username:'Kay', text:commentContent
		}
		this.props.callBackParent(data)
		event.target.elements[0].value ='';
	}

	render(){
		return(
			<div className="write-wrap">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<textarea className="write-con"></textarea>
					<input type="submit" value="提交" className='sub-btn'/>
				</form>
			</div>
		)
	}
}


class Comments extends Component {
	constructor(){
		super();
		this.state={
			indeboxData: commentData
		}
	}
	onDataChanged(data){
		this.state.indeboxData.unshift(data);
		var nowData = this.state.indeboxData;
		this.setState({
			indeboxData: nowData
		})
	}

	render(){
		return(
			<div className="container">
				<CommentsContents data={this.state.indeboxData}/>
				<CommentsBox callBackParent={this.onDataChanged.bind(this)}/>
			</div>
		)
	}
}

ReactDOM.render(<Comments/>, document.getElementById('root'))
















