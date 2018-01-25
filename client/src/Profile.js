import React, { Component } from 'react';
import InsertShoes from './wardrobe/Shoes/InsertShoes.js';
import ShoesCollection from './wardrobe/Shoes/ShoesCollection.js';
import Weather from './Weather';

class Profile extends Component {

  render(){
  
    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>Welcome Back {this.props.user.name}!</h2>
          <p>Today in {this.props.user.location}:</p>
          <Weather user={this.props.user} shoeType={this.props.user.shoes.shoe_type} />
          
          <InsertShoes user={this.props.user}/>
          <ShoesCollection shoes={this.props.user.shoes}/>
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
