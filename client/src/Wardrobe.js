import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import clothing components
import Shoes from './wardrobe/Shoes.js';

class Wardrobe extends Component {
	render() {
		return (
			<Router>
				<div>
					<h4>Wardrobe</h4>
					<div className="space">
						<Route path="../wardrobe/shoes" component={Shoes} />
						<Link to="/wardrobe/shoes">Shoes</Link>
					</div>
				</div>
			</Router>
		)
	}
}

export default Wardrobe;