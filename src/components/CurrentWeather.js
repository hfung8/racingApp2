import React, { Component } from 'react';
import '../Weather.css';
// import data from '../../DummyData';

import Card from './Card';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_city: 'Louisville',
      current_condition: 'Sunny',
      current_day: 'Wednesday',
      current_temperature: '46.0 F (7.8 C)',
      expected_high: '51.0 F',
      expected_low: '32.0 F',
      summary: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.'
    };

  }

  // handleChange = (e) => {
  //   this.setState = ({
  //     current_city: e.target.value,
  //     current_condition: e.target.value,
  //     current_day: e.target.value,
  //     current_temperature: e.target.value,
  //     expected_high: e.target.value,
  //     expected_low: e.target.value,
  //     summary: e.target.value

  //   })
  // }

  render() {
    let {list} = this.props;
    list = list.slice(0, 3);
    return (
      <div>
        <span>
          <h5>Current City</h5>
          <input className="currentWeather" value={this.state.current_city} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
          <h5>Current Condition</h5>
          <input className="currentWeather" value={this.state.current_condition} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
          <h5>Current Day</h5>
          <input className="currentWeather" value={this.state.current_day} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
          <h5>Current Temperature</h5>
          <input className="currentWeather" value={this.state.current_temperature} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
          <h5>Expected High</h5>
          <input className="currentWeather" value={this.state.expected_high} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
          <h5>Expected Low</h5>
          <input className="currentWeather" value={this.state.expected_low} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
          <h5>Summary</h5>
          <input className="currentWeather" value={this.state.summary} style={{ margin: 'auto', display: 'block' }} onChange={this.handleChange} /> <br />
        </span>

        <div>
          {list.map((item) => {
            return (
              <Card key={item.dt_txt} data={item} first={this.state.first}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CurrentWeather;