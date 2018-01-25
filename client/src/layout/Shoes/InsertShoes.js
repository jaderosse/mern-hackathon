import React, { Component } from 'react';

class InsertShoes extends Component{
	
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit hanglede');

		// TODO Make a post call to /shoes and send the updated/created shoe data for a specific userID

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