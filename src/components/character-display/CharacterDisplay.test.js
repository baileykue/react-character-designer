import { render, screen } from '@testing-library/react';
import CharacterDisplay from './CharacterDisplay';

test('renders the given images for component CharacterDisplay', () => {
  const container = render(
    <CharacterDisplay head="hampster" shirt="yellow-shirt" pant="trousers" />
  );
  expect(container).toMatchSnapshot;
});
