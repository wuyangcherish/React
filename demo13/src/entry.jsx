import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends Component {
	Increment(){
		let num = document.getElementById('num');
		let nowValue = parseInt(num.innerHTML, 10)
		
		nowValue=nowValue+1;
		document.getElementById('num').innerHTML = nowValue;
	}
	Decrement(){
		let num = document.getElementById('num');
		let nowValue = parseInt(num.innerHTML, 10)
		
		nowValue=nowValue-1;
		document.getElementById('num').innerHTML = nowValue;
	}
	render(){
		return (
			<div>
				<p>现在的数字是：<span id='num'>0</span></p>
				<button onClick={this.Increment.bind(this)} >加1</button>
				<button onClick={this.Decrement.bind(this)} >减1</button>
			</div>
		)
	}
}

ReactDOM.render(<Counter />, document.getElementById('example'))