import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  renderBands = () => this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band} />)
  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderBands()}
      </div>
    );
  }
}

export default Bands
