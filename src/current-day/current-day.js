import React from "react";

class CurrentDay extends React.Component {
  render() {
    
    const date = new Date();
    const weekDay = date.toLocaleDateString('en-US', {weekday: 'long'});
    const monthDayYear = date.toLocaleDateString('en-US',{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return(
      <div className={"date"}>
        <span className={"date__day"}>{weekDay}</span> {monthDayYear}
      </div>
    );
  }
}

export default CurrentDay;