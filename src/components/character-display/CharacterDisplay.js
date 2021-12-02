import React from 'react';

export default function CharacterDisplay({ head, shirt }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/animal-faces/${head}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/shirts/${shirt}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/pants/trousers.png`} />
      </div>
    </>
  );
}
