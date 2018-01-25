import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: ''
    }
  }

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
    if(this.state.temp > 50){
      console.log('so cold!');
    } else {
      console.log('sandals it is!');
    }
  }

  render(){
    return (
      <h1>Temp: {this.state.temp}</h1>
    )
  }
}

export default Weather