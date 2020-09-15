import React from "react";
import Band from "./Band";

class Bands extends React.Component {
  renderBands = () => {
    return this.props.bands.map((band) => (
      <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
    ));
  };
  render() {
    return this.renderBands();
  }
}

export default Bands;
