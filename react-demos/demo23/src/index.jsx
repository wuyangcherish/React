
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './css/index';

import firebase from 'firebase';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// console.log("firebase是：",firebase)

firebase.initializeApp({
  databaseURL: "https://test-6ba90.firebaseio.com",
  serviceAccount: "path/to/firebase.json"
});

var db = firebase.database();
var ref = db.ref("comments/");



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
			let result = [];
			for(var i in res){
				result.push(res[i])
			}
			var list = result.map(function(item,index){
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
			<ReactCSSTransitionGroup transitionName="comments-lists"
				transitionEnterTimeout={500} transitionLeaveTimeout={300}
				transitionAppear={true} transitionAppearTimeout={500}
				component="ul">
					{list}
			</ReactCSSTransitionGroup>
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
		const userName = event.target.elements[0].value;
		const commentContent = event.target.elements[1].value;

		if(commentContent === '' || userName ===''){
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
		event.target.elements[1].value ='';
	}

	render(){
		return(
			<div className="write-wrap">
				<form onSubmit={this.handleSubmit.bind(this)} className="form-con">
					<div className="user-info">
						<span className="user-pic">
							<img src="http://7xlqb6.com1.z0.glb.clouddn.com/user.jpg" ref="userImg"/>
						</span>
						<input type="text" className="user-name" ref="userName" placeholder="Ray"/>
					</div>
					<div className="text-con">
						<textarea className="write-con"></textarea>
						<input type="submit" value="提交" className='sub-btn'/>
					</div>
				</form>
			</div>
		)
	}
}


class Comments extends Component {
	constructor(){
		super();
		this.state={
			indeboxData:null
		}
	}

	componentDidMount() {
		var _that = this;
	 	ref.once('value', function(snapshot){
	 		// console.log(snapshot.val());
	 		_that.setState({
	 			indeboxData: snapshot.val()
	 		})
	 	})
	}

	getCommentsDate(){
		var _that = this;
		ref.on('value', function(snapshot){
			_that.setState({
	 			indeboxData: snapshot.val()
	 		})
		})
	}

	writeCommentsData(data){
		firebase.database().ref('comments/').push({
			username:data.username,
			imgSrc:data.imgSrc,
			text:data.text
		})
	}
	onDataChanged(data){
		// console.log("已评论");
		this.getCommentsDate();
		this.writeCommentsData(data);
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
















