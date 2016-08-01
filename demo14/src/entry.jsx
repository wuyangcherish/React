import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactHover from 'react-hover';
import * as styles from './index'
import * as componentHtml from './componentHtml'

const optionsCursorFalse = {
  followCursor: false
}


export default class NavBar extends Component {
	render(){
		return(
			<div style={{position:'relative',top:0,left:0}}>
				<ReactHover styles={styles.basic} 
				componentHtml={componentHtml.basicComponentHtml}
				options= {optionsCursorFalse}
				/>	
			</div>
		)
	}
}

ReactDOM.render(<NavBar />, document.getElementById('example'));