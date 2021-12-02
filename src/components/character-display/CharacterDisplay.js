import React from 'react';
import './CharacterDisplay.css';

export default function CharacterDisplay({ head, shirt, pant }) {
  return (
    <>
      <div className="right">
        <div>
          <img className="head" src={`${process.env.PUBLIC_URL}/animal-faces/${head}.png`} />
        </div>
        <div>
          <img className="shirt" src={`${process.env.PUBLIC_URL}/shirts/${shirt}.png`} />
        </div>
        <div>
          <img className="pant" src={`${process.env.PUBLIC_URL}/pants/${pant}.png`} />
        </div>
      </div>
    </>
  );
}
