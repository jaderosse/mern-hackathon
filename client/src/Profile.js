import React, { Component } from 'react';
import InsertShoes from './layout/Shoes/InsertShoes.js';
class Profile extends Component {

  weatherCheck = (e) => {
    e.preventDefault();
    let weatherUrl = 'http://api.wunderground.com/api/af1c838078e4bd8f/conditions/q/' + this.props.user.location + '.json';
    console.log(weatherUrl);
  } 

  render(){

    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
          <h3>Your location: {this.props.user.location}</h3>
          <h3>Your shoes: {this.props.user.shoes}</h3>
          <InsertShoes />
        </div>);
    }
    else {
      return (<p>This is a profile page. You need to be logged in to view it.</p>);
    }
  }
}

export default Profile;
