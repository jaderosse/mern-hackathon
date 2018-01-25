import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render(){
    let sidebar = <div></div>;
    if(this.props.user){
      sidebar = (
        <div className="sidebar">
          <Link to="/wardrobe"><strong>Wardrobe</strong></Link>
          <Link to="/wardrobe/shoes">   Shoes</Link>
        </div>);
    }

    return(
      <div>
        {sidebar}
      </div>
    );
  }
}

export default Sidebar;