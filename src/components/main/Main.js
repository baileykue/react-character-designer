import React, { useState } from 'react';
import CharacterOptions from '../character-options/CharacterOptions';
import CharacterDisplay from '../character-display/CharacterDisplay';

export default function Main() {
  return (
    <div>
      <CharacterOptions />
      <CharacterDisplay />
    </div>
  );
}
