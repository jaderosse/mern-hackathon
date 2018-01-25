import React, { Component } from 'react';
import axios from 'axios';

class InsertShoes extends Component{
	
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit hanglede', this.props.user);

		// TODO Make a post call to /shoes and send the updated/created shoe data for a specific userID
		axios.post('/shoes', {
      user: this.props.user
    });
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text"></input>
					<input type="submit" />
				</form>

			</div>
			

		)
	}
}

export default InsertShoes