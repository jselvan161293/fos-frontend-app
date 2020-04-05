import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 

const CustomCalendar = (props) => {

  const state = {
    date: new Date(),
  }

  // onChange = date => {this.setState({ date }); console.log(date);}

  function bar(date) { state = date; console.log(date);}

  return (
      <div>
        <Calendar
          onChange={bar}
          value={state}
        />
      </div>
    );

 }

export default CustomCalendar