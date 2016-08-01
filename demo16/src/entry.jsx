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
				<li key={data.id} className="box-li"><a href="#">{data}</a></li>
			)
		})
		return (
			<div className="nav-box-wrap"><ul>{boxLi}</ul></div>
		)
	}

}

export default class NavBar extends Component {
	handlerMouseOver(e){
		var nowTit = e.currentTarget;
		var showBox = $(nowTit).children().eq(1);
		if(showBox){
			$(showBox).css('display','block');
		}else{
			return false;
		}
	}

	handlerMouseOut(e) {
		var nowTit = e.currentTarget;
		var showBox = $(nowTit).children().eq(1);
		if(showBox){
			$(showBox).css('display','none');
		}else{
			return false;
		}
	}

	render() {
		let data = Data.navData;
		var navBarLi = data.map(function(data){
			return(
				<li key={data.id} className="nav-li" 
				onMouseOver={this.handlerMouseOver.bind(this)}
				onMouseOut={this.handlerMouseOut.bind(this)}>
					<a href="#" className="nav-tit" key={data.id}>{data.navTit}</a>
					{(()=>{
						if(data.navBox){
							return <NavBoxCon data={data.navBox} ref="dropbox" key={data.id}/>
						}
					})()}
				</li>
			)
		},this)
		return (
			<div>
				<ul className="clearfix" key={data.id}>{navBarLi}</ul>
			</div>
		)
	}
}


ReactDOM.render(<NavBar/>,document.getElementById('example'))


































