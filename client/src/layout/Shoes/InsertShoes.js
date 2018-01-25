import React, { Component } from 'react';
import axios from 'axios';

class InsertShoes extends Component{
	constructor(props){
		super();
		this.state = {
			id:'',
			comfort:'',
			waterproof:'',
			shoe_type: '',
			imgUrl:''
			
		}
	}
	
	handleChange = (e) => {
		console.log('changing', e.target);
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit hanglede', this.props.user);

		// TODO Make a post call to /shoes and send the updated/created shoe data for a specific userID
		axios.post('/shoes', {
			user: this.props.user,
			shoe_id: this.state.id,
			waterproof: this.state.waterproof,
			shoe_type: this.state.shoe_type,
			imgUrl: this.state.imgUrl
    });
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>

					<input type="text" name="id" value={this.state.id} onChange={this.handleChange} placeholder="Shoes Name"></input>
					<input type="text" name="comfort" value={this.state.comfort} onChange={this.handleChange} placeholder="1-10 How comfy?"></input>
					<input type="text" name="waterproof" value={this.state.waterproof} onChange={this.handleChange} placeholder="true/false"></input>
					<input type="text" name="shoe_type" value={this.state.shoe_type} onChange={this.handleChange} placeholder="boots, sandals,  moccasins"></input>
					<input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} placeholder="Link to image of shoes"></input>
					<input type="submit" />
				</form>

			</div>
			

		)
	}
}

export default InsertShoes