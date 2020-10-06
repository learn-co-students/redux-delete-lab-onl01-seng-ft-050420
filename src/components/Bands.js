import React from 'react';
import Band from './Band';

const Brands = (props) => {
  if (!props.bands) return;

  return props.bands.map((band) => (
    <Band key={band.id} band={band} delete={props.delete} />
  ));
};

export default Brands;