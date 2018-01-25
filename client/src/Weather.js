import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: '',
      condition: ''
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
        this.setState({condition: json.weather[0].main});
      }).catch((error) => {
        console.log('error', error);
      });
  }

  shoeCheck = () => {
    if(this.state.temp < 283 || (this.state.condition).includes("rain") ){
      console.log('return boot');
    } else {
      console.log('return sandal');
    }
  }

    // shoeCheck = () => {
  //   if(this.state.temp < 283 || (this.state.condition = "rain") ){
  //     const coldShoe = this.props.user.shoes.map((item) => {
  //       console.log(item.shoe_type);
  //       if(item.shoe_type = 'boot'){
  //         return <Shoe shoe={item} />
  //       }
  //     });
  //   } else {
  //     console.log('pretty warm');
  //   }
  // }

  render(){
    return (
      <div>
        <h1>Temperature: {Math.round(this.state.temp* 9/5 - 459.67)} °F</h1>
        <h1>Conditions: {this.state.condition}</h1>
      </div>
    )
  }
}

export default Weather