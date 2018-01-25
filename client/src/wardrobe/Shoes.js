import React, { Component } from 'react';

class Shoes extends Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Name your shoes..." />
					<div>
						<input type="radio" />
						<input type="radio" />
						<input type="radio" />
						<input type="radio" />
					</div>
				</form>
			</div>
		)
	}
}

export default Shoes;