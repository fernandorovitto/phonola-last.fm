import 'jest-styled-components';
import ArtistHeader, { ArtistHeaderProps } from '../ArtistHeader';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test for ArtistHeader Component', () => {
  test('Should render the component', () => {
    const props: ArtistHeaderProps = {
      image: '',
      isOntour: true,
      listenersCount: 50000,
      name: 'Megadeth',
      playCount: 120000000,
    };
    const tree = renderer.create(<ArtistHeader {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
