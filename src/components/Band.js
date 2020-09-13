import React, { Component } from 'react';

export default class Band extends Component {
  handleOnClick = () => {
    this.props.deleteBand(this.props.id);
  };

  render() {
    return (
      <div>
        <li>
          <span>{this.props.name}</span>
          <button onClick={this.handleOnClick}>Delete</button>
        </li>
      </div>
    );
  }
}
