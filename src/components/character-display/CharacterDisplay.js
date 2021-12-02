import React from 'react';

export default function CharacterDisplay({ head }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/animal-faces/${head}.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/shirts/yellow-shirt.png`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/pants/trousers.png`} />
      </div>
    </>
  );
}
