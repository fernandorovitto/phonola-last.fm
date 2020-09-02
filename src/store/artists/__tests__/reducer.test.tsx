import 'jest-styled-components';
import { artist, artistInfo, artists } from '@Utils/test/models/artists';
import { artistsReducer, initialState } from '../reducer';
import {
  searchArtistAction,
  searchArtistErrorAction,
  searchArtistInfoAction,
  searchArtistInfoErrorAction,
  searchArtistInfoSuccessAction,
  searchArtistSuccessAction,
  searchArtistTopAlbumsAction,
  searchArtistTopAlbumsErrorAction,
  searchArtistTopAlbumsSuccessAction,
} from '@Store/artists/actions';

import { albums } from '@Utils/test/models/albums';
import { ArtistsState } from '../types';

describe('Test for Artist Reducer', () => {
  it('Should return the inital state', () => {
    const action = { type: '' };
    expect(artistsReducer(undefined, action)).toEqual(initialState);
  });

  it('Should handle artist/SEARCH_ARTIST', () => {
    const action = searchArtistAction('Artist');
    const stateResult = {
      ...initialState,
      searchLoading: true,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_ERROR', () => {
    const action = searchArtistErrorAction('ERROR');
    const stateResult: ArtistsState = {
      ...initialState,
      errors: 'ERROR',
      searchCache: [],
      searchLoading: false,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_SUCCESS', () => {
    const action = searchArtistSuccessAction(artist.name, artists);
    const stateResult: ArtistsState = {
      ...initialState,
      searchCache: artists,
      searchLoading: false,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_INFO_ARTIST', () => {
    const action = searchArtistInfoAction(artist.mbid, artist.name);
    const stateResult: ArtistsState = {
      ...initialState,
      infoSearchLoading: true,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_INFO_ERROR', () => {
    const action = searchArtistInfoErrorAction('ERROR');
    const stateResult: ArtistsState = {
      ...initialState,
      errors: 'ERROR',
      infoCache: null,
      infoSearchLoading: false,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_INFO_SUCCESS', () => {
    const action = searchArtistInfoSuccessAction(artist.name, artistInfo);
    const stateResult: ArtistsState = {
      ...initialState,
      infoCache: artistInfo,
      infoSearchLoading: false,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_TOP_ALBUMS', () => {
    const action = searchArtistTopAlbumsAction(artist.mbid, artist.name);
    const stateResult: ArtistsState = {
      ...initialState,
      topAlbumsSearchLoading: true,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_TOP_ALBUMS_ERROR', () => {
    const action = searchArtistTopAlbumsErrorAction('ERROR');
    const stateResult: ArtistsState = {
      ...initialState,
      errors: 'ERROR',
      infoSearchLoading: false,
      topAlbumsCache: [],
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });

  it('Should handle artist/SEARCH_ARTIST_TOP_ALBUMS_SUCCESS', () => {
    const action = searchArtistTopAlbumsSuccessAction(artist.name, albums);
    const stateResult: ArtistsState = {
      ...initialState,
      infoSearchLoading: false,
      topAlbumsCache: albums,
    };
    expect(artistsReducer(undefined, action)).toEqual(stateResult);
  });
});
