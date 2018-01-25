import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wardrobe extends Component {
	render() {
		return (
			<div>
				<h4>Wardrobe</h4>
				<div className="space">
					<Link to="/wardrobe/shoes">Shoes</Link>
				</div>
			</div>
		)
	}
}

export default Wardrobe;