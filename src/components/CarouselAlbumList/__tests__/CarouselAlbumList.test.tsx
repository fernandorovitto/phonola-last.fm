import 'jest-styled-components';
import CarouselAlbumList, { IProps } from '../CarouselAlbumList';
import { Album } from '@Store/artists/types';
import { albums } from '@Utils/test/models/albums';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test for CarouselAlbumList Component', () => {
  test('Should render the component with no albums', () => {
    const albumsEmpty = [] as Album[];
    const props: IProps = {
      albums: albumsEmpty,
    };
    const tree = renderer.create(<CarouselAlbumList {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('Should render the component with albums', () => {
    const props: IProps = {
      albums,
    };
    const tree = renderer.create(<CarouselAlbumList {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
