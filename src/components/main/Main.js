import React, { useState } from 'react';
import CharacterOptions from '../character-options/CharacterOptions';
import CharacterDisplay from '../character-display/CharacterDisplay';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('hampster');
  const [shirt, setShirt] = useState('yellow-shirt');

  return (
    <div>
      <CharacterOptions {...{ head, setHead, shirt, setShirt }} />
      <CharacterDisplay {...{ head, shirt }} />
    </div>
  );
}
