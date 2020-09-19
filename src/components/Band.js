import React, { Component } from 'react';

class Band extends Component {
  

  render() {
    return(
      <div>
        Band Component
        <li>{this.props.band.name}</li>
        <button onClick={ () => this.props.deleteBand(this.props.band.id)}> </button>
      </div>
    );
  }
};



export default Band;
