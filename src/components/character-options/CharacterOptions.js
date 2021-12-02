import React, { useState } from 'react';
import './CharacterOptions.css';

export default function CharacterOptions() {
  return (
    <>
      <div>
        <label>
          Head
          <select>
            <option value="hampster">Hampster</option>
            <option value="hen">Hen</option>
            <option value="tiger">Tiger</option>
            <option value="wolf">Wolf</option>
          </select>
        </label>
        <label>
          Shirt
          <select>
            <option value="blue-shirt">Blue Shirt</option>
            <option value="red-shirt">Red Shirt</option>
            <option value="stripped-shirt">Stripped Shirt</option>
            <option value="yellow-shirt">Yellow Shirt</option>
          </select>
        </label>
        <label>
          Bottoms
          <select>
            <option value="denim-shorts">Denim Shorts</option>
            <option value="pants">Pants</option>
            <option value="swim-shorts">Swim Shorts</option>
            <option value="trousers">Trousers</option>
          </select>
        </label>
        <label>
          Give your character a catch-phrase
          <input />
          <button>Add</button>
        </label>
      </div>
    </>
  );
}
