import React, { useState } from 'react';
import CharacterOptions from '../character-options/CharacterOptions';
import CharacterDisplay from '../character-display/CharacterDisplay';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('hampster');
  const [shirt, setShirt] = useState('yellow-shirt');
  const [pant, setPant] = useState('trousers');

  const [headCount, setHeadCount] = useState(0);
  const [shirtCount, setShirtCount] = useState(0);
  const [pantCount, setPantCount] = useState(0);

  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <div>
      <CharacterOptions
        {...{
          head,
          setHead,
          setHeadCount,
          shirt,
          setShirt,
          setShirtCount,
          pant,
          setPant,
          setPantCount,
          phrase,
          setPhrase,
          phraseList,
          setPhraseList,
        }}
      />
      <CharacterDisplay {...{ head, shirt, pant }} />
      {!!headCount && <p>You have changed the head {headCount} times.</p>}
      {!!shirtCount && <p>You have changed the shirt {shirtCount} times.</p>}
      {!!pantCount && <p>You have changed bottoms {pantCount} times.</p>}
      {!!phraseList.length && (
        <div>
          Your catch-phrases are:
          {phraseList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
    </div>
  );
}
