import React from "react";

class LiveSearch extends React.Component {
  render() {
    const {setKeyWords} = this.props;
    
    return (
      <>
        <div className={"search__title"}>Search</div>
        <input 
          placeholder="Type keyword..."
          onChange={ e => setKeyWords(e.target.value)}
          className={"search__input"}/>
      </>
    )
  }
}

export default LiveSearch;