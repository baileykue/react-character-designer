import { render, screen } from '@testing-library/react';
import CharacterOptions from './CharacterOptions';

test('renders the given', () => {
  const container = render(
    <CharacterOption 
    head="hampster",
    setHead=,
    setHeadCount,
    shirt="yellow-shirt",
    setShirt,
    setShirtCount,
    pant="trousers",
    setPant,
    setPantCount,
    phrase,
    setPhrase,
    setPhraseList, />
  );
  expect(container).toMatchSnapshot;
});
