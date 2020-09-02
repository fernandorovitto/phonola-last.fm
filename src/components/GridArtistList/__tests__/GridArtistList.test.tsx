import 'jest-styled-components';
import GridArtistList, { IProps } from '../GridArtistList';
import { Artist } from '@Store/artists/types';
import { artists } from '@Utils/test/models/artists';
import { browser } from '@Utils/test/models/browser';
import { createMemoryHistory } from 'history';
import { location } from '@Utils/test/models/location';
import { match } from '@Utils/test/models/match';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
describe('Test for GridArtistList Component', () => {
  const defaultArtists: Artist[] = [] as Artist[];
  const history = createMemoryHistory();

  const defaultProps: IProps = {
    artists: defaultArtists,
    browser,
    history,
    location,
    match,
    searchArtistInfo: jest.fn(),
    searchArtistTopAlbums: jest.fn(),
  };

  test('Should render the component with no artists', () => {
    const tree = renderer.create(
      <Router>
        <GridArtistList {...defaultProps} />
      </Router>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('Should render the component with artists', () => {
    const props: IProps = {
      ...defaultProps,
      artists,
    };
    const tree = renderer.create(
      <Router>
        <GridArtistList {...props} />
      </Router>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
