import React, { Component } from 'react';
import Shoe from './Shoe';

class ShoesCollection extends Component {
  // const allShoes = this.props.shoes.map((item) => {
  //   <Shoe shoe={item}/>
  // })
  render() {
    return (
      <div>{console.log(this.props.shoes)}</div>
    )
  }

}

export default ShoesCollection