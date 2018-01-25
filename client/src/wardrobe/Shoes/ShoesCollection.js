import React, { Component } from 'react';
import Shoe from './Shoe.js';

class ShoesCollection extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const allShoes = this.props.shoes.map((item) => {
      return <Shoe shoe={item}/>
    })

    return (
      <div className="shoe-collection">
        <ul>{allShoes}</ul>
      </div>
    )
  }

}

export default ShoesCollection;