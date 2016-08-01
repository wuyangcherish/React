import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as Data from './data';
import "./index.css";
import $ from "jquery";


{/*下拉Box*/}

class NavBoxCon extends Component {
	render(){
		let boxData = this.props.data;  {/*如果有的话就是个数组，没有的话为undefined*/}
		let boxLi = boxData.map(function(data){			
			return(
				<li key={data.id} className="box-li">
					<a href="#">{data}</a>
				</li>
			)
		})
		return (
			<div className="nav-box-wrap"><ul>{boxLi}</ul></div>
		)
	}

}

export default class NavBar extends Component {
	constructor(){
		super();
		this.state={
			drop:false
		}
	}
	handlerMouseOver(e){
		this.setState({
			drop:true
		})
	}

	handlerMouseOut(e) {

	}

	render() {
		let data = Data.navData;
		var items = data.map(function(item, index){
			if(item.children){
				let children = item.children.map(function(child){
					return (
						<li className='box-li'>
							<a href="#">{child.text}</a>
						</li>
					)
				});

				var dropBox = (
					<ul className="nav-box-wrap" data-drop='false' ref='dropbox'>
						{children}
					</ul>
				)

			}

			return (
				<li className="nav-li" key={item.id}
				onMouseOver={this.handlerMouseOver.bind(this)}>
					<a href={item.href} className="nav-tit">{item.text}</a>
					{(()=>{
						if(this.state.drop){
							console.log(this.state.drop)
							{dropBox}
						}
					})()}
				</li>
			)
		},this)
		return (
			<div>
				<ul className="clearfix" key={data.id}>
					{items}
				</ul>
			</div>
		)
	}
}


ReactDOM.render(<NavBar/>,document.getElementById('example'))


































