import React, { useState } from 'react';
import CharacterOptions from '../character-options/CharacterOptions';
import CharacterDisplay from '../character-display/CharacterDisplay';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('hampster');
  return (
    <div>
      <CharacterOptions {...{ head, setHead }} />
      <CharacterDisplay {...{ head, setHead }} />
    </div>
  );
}
