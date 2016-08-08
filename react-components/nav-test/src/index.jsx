import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as Data from './data';
import "./index.css";


export default class NavBar extends Component {
	render() {
		let data = Data.navData;
		var items = data.map(function(item, index){
			if(item.children){
				let children = item.children.map(function(child){
					return (
						<li className='box-li'>
							<a href="#" className="box-link">{child.text}</a>
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
				<li className="nav-li" key={item.index}>
					<a href={item.href} className="nav-tit" ref="navtit">{item.text}</a>
						{dropBox}
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


ReactDOM.render(<NavBar/>,document.getElementById('nav'))


































