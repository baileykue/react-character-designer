import React from 'react';
import './CharacterOptions.css';

export default function CharacterOptions({
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
  setPhraseList,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleShirt = (e) => {
    setShirt(e.target.value);
    setShirtCount((prevState) => prevState + 1);
  };

  const handlePant = (e) => {
    setPant(e.target.value);
    setPantCount((prevState) => prevState + 1);
  };

  const handlePhrase = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

  return (
    <>
      <div className="left">
        <label className="label-stack">
          Head:
          <select value={head} onChange={handleHead}>
            <option value="hampster">Hampster</option>
            <option value="hen">Hen</option>
            <option value="tiger">Tiger</option>
            <option value="wolf">Wolf</option>
          </select>
        </label>

        <label className="label-stack">
          Shirt:
          <select value={shirt} onChange={handleShirt}>
            <option value="blue-shirt">Blue Shirt</option>
            <option value="red-shirt">Red Shirt</option>
            <option value="stripped-shirt">Stripped Shirt</option>
            <option value="yellow-shirt">Yellow Shirt</option>
          </select>
        </label>

        <label className="label-stack">
          Bottoms:
          <select value={pant} onChange={handlePant}>
            <option value="denim-shorts">Denim Shorts</option>
            <option value="pants">Pants</option>
            <option value="swim-shorts">Swim Shorts</option>
            <option value="trousers">Trousers</option>
          </select>
        </label>

        <label className="label-stack">
          Give your character a catch-phrase:
          <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
          <button onClick={handlePhrase}>Add</button>
        </label>
      </div>
    </>
  );
}
