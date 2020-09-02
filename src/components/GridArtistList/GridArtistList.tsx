import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React, { MouseEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import {
  searchArtistInfoAction,
  searchArtistTopAlbumsAction,
} from '@Store/artists/actions';
import { Artist } from '@Store/artists/types';
import defaultArtistCover from '@Assets/images/defaultArtistCover.png';
import { IBrowser } from 'redux-responsive/types';
import styled from 'styled-components';

interface PropsFromState extends RouteComponentProps {
  artists: Artist[];
  browser: IBrowser;
}

interface PropsFromDispatch {
  searchArtistTopAlbums: typeof searchArtistTopAlbumsAction;
  searchArtistInfo: typeof searchArtistInfoAction;
}

export type IProps = PropsFromState & PropsFromDispatch;

const gridWidthColumns: Record<string, number> = {
  extraSmall: 2,
  small: 3,
  // eslint-disable-next-line sort-keys
  medium: 4,
  // eslint-disable-next-line sort-keys
  large: 5,
  // eslint-disable-next-line sort-keys
  infinity: 6,
};

class GridArtistList extends React.Component<IProps> {
  private _clickArtist = (event: MouseEvent, artist: Artist): void => {
    event.preventDefault();
    this.props.searchArtistInfo(artist.mbid, artist.name);
    this.props.searchArtistTopAlbums(artist.mbid, artist.name);
    this.props.history.push({
      pathname: '/artist',
    });
  };

  private _getImage = (image: string): string =>
    image !== '' ? image : defaultArtistCover;

  private _gridItem = (artist: Artist, index: number): React.ReactElement => (
    <GridListTile
      key={index}
      cols={1}
      onClick={(e: MouseEvent): void => this._clickArtist(e, artist)}
    >
      <ImageContainer
        src={this._getImage(artist.avatar.xl)}
        alt={artist.name}
      />
      <StyledGridListTileBar
        title={artist.name}
        subtitle={
          <span>
            Listeners:{' '}
            {artist.listeners.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </span>
        }
        actionPosition="left"
      />
    </GridListTile>
  );

  private _gridItems = (): React.ReactNode =>
    this.props.artists.map(
      (artist: Artist, index: number): React.ReactElement =>
        this._gridItem(artist, index),
    );

  private _getGridColumns = (type: string): number => gridWidthColumns[type];

  public render(): React.ReactElement {
    return (
      <Wrapper>
        <StyledGridList
          spacing={1}
          cols={this._getGridColumns(this.props.browser.mediaType)}
        >
          {this._gridItems()}
        </StyledGridList>
      </Wrapper>
    );
  }
}

export default withRouter(GridArtistList);

// Styled components

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
`;

const StyledGridList = styled(GridList)``;

const StyledGridListTileBar = styled(GridListTileBar)`
  height: 80px;
`;

const ImageContainer = styled('img')`
  border: 1px rgba(255, 255, 255, 0.5) solid;
  max-height: 100%;
  max-width: 100%;
`;
