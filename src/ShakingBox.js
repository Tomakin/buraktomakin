import React, { useState } from 'react';
import './ShakingBox.css';
import box from './box.png';
import boxOpen from './boxOpen.png';

const ShakingBox = ({shake, lastQues}) => {

  return (
    <div
    style={{display: 'flex', justifyContent: 'center'}}    
    >
      {!lastQues && 
      <img
      width={250}
      height={250}
      src={box}
      alt="Shake me"
      className={shake ? 'shake' : ''}
    />}
    {lastQues && 
    <img
    width={250}
    height={250}
    src={boxOpen}
    alt="Shake me"
    className={shake ? 'shake' : ''}
  />}
    </div>
  );
};

export default ShakingBox;