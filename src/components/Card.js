import React, {Component} from 'react';
import "./Card.css";
const moment = require('moment');

class Card extends Component {
  // constructor(props) {
  //   super(props);

  // }


  render () {
    let {data} = this.props;
    let temp = data.main.temp;
    let date = data.dt_txt;
    let current_condition = data.weather[0].main;
    let summary = data.weather[0].description;
    // let current_city = 
    let current_celsius = parseFloat(parseInt(temp) - 273.15).toFixed(2); 
    let current_fahrenheit = parseFloat((parseInt(temp) - 273.15) * 9 / 5 + 32 ).toFixed(2);
    // console.log("result", result);
    // var result = Object.keys(data).map(key => 
    //   [Number(key) + ':', data(key)]
    // )
    let expected_high = parseFloat((parseInt(data.main.temp_max) - 273.15) * 9 / 5 + 32).toFixed(2);
    
    let expected_low = parseFloat((parseInt(data.main.temp_min) - 273.15) * 9 / 5 + 32).toFixed(2);

    console.log('data', data);
    // console.log('result', result);

    var current_day = moment(date).format('dddd')

    // let time = data.map(list => list.dt_txt );
    // console.log('time', time);

    
    // var day = time.map(date => {
    //   var daytime = moment(date).format('dddd')
    //   return daytime;
    // })

    // console.log('day', day);

    // console.log("data", data);
    // // console.log("list", list);

    // let time = data.map(data => data.dt_txt );
    // console.log('time', time);

    // var arr = [];
    // for ( var i = 0; i < time.length; i++) {
    //   var dayTime = moment(time[i]).date();
    //   arr.push(dayTime);
    // }
    // time.forEach(time => moment(time).date());

    // console.log(arr);





    // let last = date[2].split(" ");
    // let year = Number(date[0]);
    // let month = Number(date[1]);
    // let day = Number(last[0]);
    // let hour = last[1];
    // console.log("data", data);
    
    // console.log(typeof data);
    // console.log(typeof day);
    
    // console.log(data);
    // var solo = Object.values(data);
    // var five = Object.values(data)[7].split("-");
    // var test = five[2].split(" ");
    // var testTwo = Number(test[0]);
    // var hour = test[1];

    
    // var dateTwo = solo[7];
    

    
    // console.log("test", test);
    // console.log("testTwo", testTwo);
    // console.log(day);
    // console.log("solo data", solo);
    
    // var eighth = solo.filter(element => {
    //   return typeof element === 'string';
      // let eightTwo = element.split("-");
      // let eightThree = eightTwo[2].split(" ");
      // let hour = eightThree[1];
      
      // return hour;
    // });

    // console.log(eighth);
    // var stepOne = eighth[0].split("-");
    // var stepTwo = stepOne[2].split(" ");
    // var hour = stepTwo[1];

    // // console.log(hour);
    // let container = [];
    // container.push(hour);
    // console.log(container);
    // console.log(first);
    // console.log(middle);
    // // console.log(last);
    // console.log(end);
    // console.log(hour);

    // for (var i = 0; i < date.length; i++) {  
      
    // }

    

    return (
      <div className="card">
        <div>current city: </div>
        <div>current condition: {current_condition}</div>
        <div>date: {date} </div>
        <img />
        <div>temperature: {current_fahrenheit} F ({current_celsius}) C</div>
        <div>day: {current_day}</div>
        <div>expected high: {expected_high} F</div>
        <div>expected low: {expected_low} F</div>
        <div>summary: {summary}</div>
      </div>
    );
  }

}

export default Card;