import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
// import WeatherForm from './components/WeatherForm';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      list: []
      /*
      this.state = {
        wednesday: [temp1, temp2],
        thursday: [],
        
      } */
    };

  }

  render() {
    return (
      <div>
        <Weather handleListChange={(list) => {
          this.setState({list});
        }} />
        <CurrentWeather list={this.state.list} />
      </div>
    );
  }
}

export default App;
