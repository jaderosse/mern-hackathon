import React, { Component } from 'react';
import Shoe from './Shoe';

class ShoesCollection extends Component {
  
  render() {

    const allShoes = this.props.shoes.map((item) => {
     return <Shoe shoe={item}/>
    })

    return (
      <div>
        <ul>{allShoes}</ul>
        <p>This is a test</p>
      </div>
      
      
    )
  }

}

export default ShoesCollection