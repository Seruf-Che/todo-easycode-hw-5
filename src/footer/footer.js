import React, {Component} from 'react'

class Footer extends Component{

  state = {
    value: ""
  };

  changeValue = (e) => {
    const {value} = e.target;
    this.setState({value:value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.value);
    this.setState({value: ""})
  };

  render(){
    const {value} = this.state;
    return(
      <div className="footer">
        <form className={"form"} onSubmit={(e) => this.onSubmit(e)}>
          <div className="title">What else?</div>
          <input 
            value={value}
            onChange = {(e) => this.changeValue(e) }
            type="text" 
            className="input" 
            placeholder={"I have to do..."}/>
          <button 
            type="submit" 
            className="button"
            disabled={value.length > 0 ? false : true}>Add</button>    
        </form>
      </div>
    )
  }
}

export default Footer
