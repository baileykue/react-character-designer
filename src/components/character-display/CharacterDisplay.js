import React from 'react';
import './CharacterDisplay.css';

export default function CharacterDisplay({ head, shirt, pant }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/animal-faces/${head}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/shirts/${shirt}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/pants/${pant}.png`} />
      </div>
    </>
  );
}
