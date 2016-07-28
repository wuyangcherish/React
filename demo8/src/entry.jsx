import React, {Component} from 'react';
import ReactDOM from 'react-dom';

{/*
var LikeButton = React.createClass({
	getInitialState: function(){
	    return {liked: false} ;
	},

	handleClick: function(event){
		this.setState({liked: !this.state.liked})
	},
	render: function(){
		var text = this.state.liked? 'like': 'dislike';
		return (
			<p onClick={this.handleClick}>You {text} this click toggle.</p>
		)
	}
});
*/}


{/*es2015*/}

export default class LikeButton extends Component {
	constructor(){
		super();
		this.state = {liked: false}
	}

	handleClick(e) {
		this.setState({liked: !this.state.liked})
	}

	render(){
		let text = this.state.liked? 'like': 'dislike';
		return (
			<p onClick={this.handleClick.bind(this)}>You {text} this click toggle.</p>
			)
	}
}

ReactDOM.render(<LikeButton/>, document.getElementById('likeBtn'));