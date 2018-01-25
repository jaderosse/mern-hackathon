import React, { Component } from 'react';
import axios from 'axios';

class InsertShoes extends Component{
	constructor(props){
		super();
		this.state = {
			id:''
			
		}
	}
	
	handleIdChange = (e) => {
		console.log('changing');
		this.setState({id: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit hanglede', this.props.user);

		// TODO Make a post call to /shoes and send the updated/created shoe data for a specific userID
		axios.post('/shoes', {
			user: this.props.user,
			shoe_id: this.state.id
    });
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>

					<input type="text" name="id" value={this.state.id} onChange={this.handleIdChange}></input>

					<input type="submit" />
				</form>

			</div>
			

		)
	}
}

export default InsertShoes