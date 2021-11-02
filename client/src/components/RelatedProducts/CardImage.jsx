import React from 'react';
import ReactDOM from 'react-dom';

const CardImage = (props) => (
  <>
    <img src={props.img}
      role='img'
      title={props.description}
      z-index="0" />
  </>
);


export default CardImage;