
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {storage} from './data';

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
	handleSubmit(event){

		event.preventDefault();
		const userImg = this.refs.userImg.src;
		const userName = this.refs.userName.innerText;
		const commentContent = event.target.elements[0].value;
		if(commentContent == ''){
			console.log("没写东西评啥评~");
			return;
		}
		const data={
				imgSrc:userImg,
				username:userName, 
				text:commentContent
		}
		this.props.callBackParent(data)
		event.target.elements[0].value ='';
	}

	render(){
		return(
			<div className="write-wrap">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="user-info">
						<span className="user-pic">
							<img src="http://7xlqb6.com1.z0.glb.clouddn.com/user.jpg" ref="userImg"/>
						</span>
						<span className="user-name" ref="userName">Ray</span>
					</div>
					
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
			indeboxData: storage.get().comments
		}
	}
	onDataChanged(data){
		this.state.indeboxData.unshift(data);
		var nowData = this.state.indeboxData;
		//存放到localStorage中
		storage.save(nowData)
		this.setState({
			indeboxData: nowData
		});

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
















