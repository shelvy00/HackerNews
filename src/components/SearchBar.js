import React, { Component } from 'react'

export class SeachBar extends Component {
  state = { term: "" };

  onSubmit = (event) => {
      event.preventDefault()
      this.props.onSubmit(this.state.term) // use this.props just like this in class components
  }


  render() {
    return (
     <div className="ui segment">
      <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
           <label>Search</label>
           <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/>
          </div>
      </form>
     </div>
    )
  }
}

export default SeachBar;
