import React from "react";

class CurrentDay extends React.Component {
  render() {
    
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    
    const date = new Date();
    const weekDay = days[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return(
      <div className={"date"}>
        <span className={"date__day"}>{weekDay}</span> {month} {day}, {year}
      </div>
    );
  }
}

export default CurrentDay;