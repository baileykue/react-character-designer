import React from 'react';

export default function CharacterDisplay() {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/animal-faces/hampster.png`} />
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
