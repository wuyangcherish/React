import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state={
			userInput: ''
		}
	}

	handleChange(e){
		this.setState({userInput: e.target.value});
	}

	clearAndFocusInput() {
		this.setState({
			userInput:''
		}, function(){
			this.refs.theInput.getDOMNode().focus();
		})
	}

	render(){
		return(
			<div>
				<div onClick={this.clearAndFocusInput.bind(this)}>Click to Focus and Reset</div>
				<input ref="theInput" value={this.state.userInput} onChange={this.handleChange.bind(this)}/>
			</div>
			
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('example'));









