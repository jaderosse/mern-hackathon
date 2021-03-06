import React, { Component } from 'react';
import Shoe from './Shoe';

class ShoesCollection extends Component {
  
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

export default ShoesCollection