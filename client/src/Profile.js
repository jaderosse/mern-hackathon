import React, { Component } from 'react';
import InsertShoes from './layout/Shoes/InsertShoes.js';
import ShoesCollection from './layout/Shoes/ShoesCollection.js';
import Weather from './Weather';

<<<<<<< HEAD
  componentDidMount = () => {
    this.weatherCheck();
    this.shoeCheck();
  }

  weatherCheck = () => {
    const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.props.user.location + ',us&appid=8a8b7899a71e133a0af9805244c61e66';
    console.log(weatherUrl);
    fetch(weatherUrl)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({temp: json.main.temp});
      }).catch((error) => {
        console.log('error', error);
      });
  }

  shoeCheck = () => {
    if(this.state.temp > 283){
      console.log('so cold!');
    } else {
      console.log('sandals it is!');
    }
  }
=======
class Profile extends Component {
>>>>>>> 705dcfb078a5766aae870d1b58becaab192aa5fb

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
