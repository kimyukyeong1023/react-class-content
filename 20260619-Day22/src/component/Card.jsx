

import React from 'react'

export default function Card({path, name, price} ) {
  return (
    <div>
        <img src={path} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
  );
}
