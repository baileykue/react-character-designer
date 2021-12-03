import { render, screen } from '@testing-library/react';
import CharacterOptions from './CharacterOptions';

test('renders the given', () => {
  const container = render(
    <CharacterOptions
      head="hampster"
      setHead="hen"
      setHeadCount="1"
      shirt="yellow-shirt"
      setShirt="red-shirt"
      setShirtCount="1"
      pant="trousers"
      setPant="pants"
      setPantCount="1"
      phrase="woohoo"
      setPhrase="why-not"
      setPhraseList="['woohoo', 'why-not']"
    />
  );
  expect(container).toMatchSnapshot;
});
