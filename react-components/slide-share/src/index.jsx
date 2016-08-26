
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './css/index';
import {shareAddress} from './data';

class SlideShare extends Component {
	constructor(props){
		super(props);
		this.state={
			isOpen:false
		}
	}
	handleMouseOver(){
		this.setState({
			isOpen: true
		})
	}
	handleMouseOut(){
		this.setState({
			isOpen: false
		})
	}

	getClass(){
		return this.state.isOpen ? "share-content active" : "share-content "
	}

	render(){
		let addressInfo = shareAddress.map(function(item,index){
			return(
				<li key={index}><a href={item.href}>{item.title}</a></li>
			)
		})
		return(
			<div className="share">
				<div className={this.getClass()} onMouseOver={this.handleMouseOver.bind(this)}
				onMouseOut={this.handleMouseOut.bind(this)}>
					<ul>
                        {addressInfo}
					</ul>
					<span className="btn">分<br/>享<br/>到</span>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<SlideShare/>,document.getElementById('slide'))