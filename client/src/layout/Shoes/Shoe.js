import React, { Component } from 'react';

class Shoe extends Component {
  render(){
    return (
      <li>
        <img src={this.props.shoe.imgUrl} alt=""/> 

        <p>Comfort level: {this.props.shoe.comfort}</p>
      </li>
    )
  }
}

export default Shoe