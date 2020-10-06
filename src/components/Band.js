
import React from 'react';

const Band = (props) => {
  const {id, name} = props.band;
  return (
    <li>
      <span>{name}</span>
      <button onClick={() => props.delete(id)}>Delete</button>
    </li>
  )
};

export default Band;