import 'jest-styled-components';
import Discography, { DiscographyProps } from '../Discography';
import { Album } from '@Store/artists/types';
import { albums } from '@Utils/test/models/albums';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test for Discography Component', () => {
  test('Should render the component with no albums', () => {
    const albumsEmpty = [] as Album[];
    const props: DiscographyProps = {
      albums: albumsEmpty,
      loading: false,
      title: '',
    };
    const tree = renderer.create(<Discography {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('Should render the component with albums', () => {
    const props: DiscographyProps = {
      albums: albums,
      loading: false,
      title: 'Title',
    };
    const tree = renderer.create(<Discography {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
