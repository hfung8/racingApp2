import React, { Component } from 'react';
import '../Weather.css';
import axios from 'axios';
const moment = require('moment');
class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
  }

  handleChange = (e) => {
    this.setState({city: e.target.value});
  }

  handleGetWeather = async (e) => {
    e.preventDefault();

    // get city
    let city = this.state.city;

    if (city === "") {
      return;
    }

    // call api
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&APPID=15bdb8e5cba4bd366ba1d80fec52d8ab`);
    
    let list = res.data.list;

    console.log("list", list);

    let time = list.map(data => data.dt_txt );
    console.log('time', time);

    
    var day = time.map(date => {
      var daytime = moment(date).format('dddd')
      return daytime;
    })

    // for (var i = 0; i < time.length; i++){
    //   var arr = [];
    //   var daytime = moment(time[i]).format('dddd');
    //   arr.push(daytime);
    // }

    console.log('day', day);


    var arr = [];
    for ( var i = 0; i < time.length; i++) {
      var dayTime = moment(time[i]).date();
      arr.push(dayTime);
    }
    time.forEach(time => moment(time).date());

    console.log(arr);
    
    this.props.handleListChange(list);

  }

  render() {
    return (
      <div>
        <form> 
          <input className="input" type="text" value={this.state.city} onChange={this.handleChange}></input>
          <button className="button" type="submit" onClick={this.handleGetWeather}>Get Weather</button>
        </form>
      </div>
    );
  }
}


class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="/getWeather"><h3>Get Weather</h3></a></li>
            <li><a href="/about"><h3>About</h3></a></li>
            <li><a href="/examples"><h3>Examples</h3></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
class WeatherMessage extends Component {

  state = {
    location: 'Miami',
    temp: 88
  }

  handleSearch() {

  }

  render() {

    return (
      <div>
        <NavBar />
        <Form handleListChange={this.props.handleListChange}/>
      </div>
    );
  }
}

export default WeatherMessage;