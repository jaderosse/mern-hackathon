import React, { Component } from 'react';
import InsertShoes from './layout/Shoes/InsertShoes.js';
import ShoesCollection from './layout/Shoes/ShoesCollection.js';
import Weather from './Weather';

class Profile extends Component {

  render(){
  
    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <h3>Your location: {this.props.user.location}</h3>
          <Weather user={this.props.user}/>
          
          <InsertShoes />
          <ShoesCollection shoes={this.props.user.shoes}/>
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
