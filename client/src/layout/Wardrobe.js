import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import clothing components
import Shoes from 'Shoes.js';

class Wardrobe extends Component {
	render() {
		return (
			<Router>
				<div className="wardrobe">
					<Route path="/shoes" component={Shoes} />
					<Link to="/shoes">Shoes</Link>
				</div>
			</Router>
		)
	}
}

export default Wardrobe;