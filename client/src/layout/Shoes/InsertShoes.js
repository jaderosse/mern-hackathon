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
				<form className="shoe-form" onSubmit={this.handleSubmit}>
					<label>Shoes Name</label>
					<input type="text" name="id" value={this.state.id} onChange={this.handleChange} placeholder="ex 'red pumps'"></input>
					<br />
					<label>Comfort Level</label>
					<select name="comfort" value={this.state.comfort} onChange={this.handleChange}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<br />
					{/*<input type="text" name="comfort" value={this.state.comfort} onChange={this.handleChange} placeholder="1-10 How comfy?"></input>*/}
					{/*<input type="text" name="waterproof" value={this.state.waterproof} onChange={this.handleChange} placeholder="true/false"></input>*/}
					<label>Waterproof?</label>
					<select name="waterproof" value={this.state.waterproof} onChange={this.handleChange}>
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
					<br />
					<label>Shoe Type</label>
					<select name="shoe_type" value={this.state.shoe_type} onChange={this.handleChange}>
						<option>Boots</option>
						<option>Tennis Shoes</option>
						<option>Heels</option>
						<option>Dress Shoes</option>
						<option>Sandals</option>
						<option>Hiking Boots</option>
					</select>
					<br />
					{/*<input type="text" name="shoe_type" value={this.state.shoe_type} onChange={this.handleChange} placeholder="boots, sandals,  moccasins"></input>*/}
					<label>Link to image</label>
					<input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} placeholder="image url"></input>
					<br />
					<input type="submit" />
				</form>

			</div>
			

		)
	}
}

export default InsertShoes