import React, { Component } from 'react';

class Band extends Component {

  // handleOnClick = event => {
  //   event.preventDefault();
  //   debugger;
  //   this.props.deleteBand()
  // }

  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
