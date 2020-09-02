import { Album, ArtistInfo as ArtistData } from '@Store/artists/types';
import {
  searchArtistInfoAction,
  searchArtistTopAlbumsAction,
  setArtistAsFavoriteAction,
} from '@Store/artists/actions';
import { ApplicationState } from '@Store/index';
import ArtistHeader from '@Components/ArtistHeader/ArtistHeader';
import Biography from '@Components/Biography/Biography';
import { connect } from 'react-redux';
import Discography from '@Components/Discography/Discography';
import LoadingLinear from '@Components/Loading/LoadingLinear';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import SimpleMessage from '@Components/SimpleMessage/SimpleMessage';
import styled from 'styled-components';

interface PropsFromState {
  isSearchingAlbums: boolean;
  albums: Album[];
  isSearchingArtist: boolean;
  artistInfo: ArtistData | null;
}

type PropsWithRoute = PropsFromState & RouteComponentProps;

interface PropsFromDispatch {
  onClickFavorite: typeof setArtistAsFavoriteAction;
  searchTopAlbums: typeof searchArtistTopAlbumsAction;
  searchArtistInfo: typeof searchArtistInfoAction;
}

type IProps = PropsWithRoute & PropsFromDispatch;

interface IState {
  artistName: string;
  artistMbid: string;
}

class ArtistInfo extends React.Component<IProps, IState> {
  public render(): React.ReactElement {
    const isLoadingArtist = this.props.isSearchingArtist;
    const artist = this.props.artistInfo;
    const isLoadingAlbums = this.props.isSearchingAlbums;
    const albums = this.props.albums;
    return (
      <Wrapper>
        {isLoadingArtist && (
          <LoadingLinear text={'Retrieving information...'} />
        )}
        {!isLoadingArtist &&
          (artist ? (
            <ArtistContainer>
              <HeaderContainer>
                <ArtistHeader
                  name={artist.name}
                  image={artist.image.xxl}
                  isOntour={artist.isOntour}
                  listenersCount={artist.stats.listeners}
                  playCount={artist.stats.playcount}
                />
              </HeaderContainer>
              <InfoContainer>
                <BioContainer>
                  <Biography
                    briefBio={artist.bio.summary}
                    fullBio={artist.bio.content}
                  />
                </BioContainer>
                <AlbumContainer>
                  <Discography
                    title={'Top Albums'}
                    loading={isLoadingAlbums}
                    albums={albums}
                  />
                </AlbumContainer>
              </InfoContainer>
            </ArtistContainer>
          ) : (
            <SimpleMessageStyled text={'The artist was not found'} />
          ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ artists }: ApplicationState): PropsFromState => ({
  albums: artists.topAlbumsCache,
  artistInfo: artists.infoCache,
  isSearchingAlbums: artists.topAlbumsSearchLoading,
  isSearchingArtist: artists.infoSearchLoading,
});

const mapDispatchToProps = {
  onClickFavorite: setArtistAsFavoriteAction,
  searchArtistInfo: searchArtistInfoAction,
  searchTopAlbums: searchArtistTopAlbumsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfo);

const SimpleMessageStyled = styled(SimpleMessage)`
  margin-top: 10px;
`;

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const InfoContainer = styled('div')`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
`;

const BioContainer = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AlbumContainer = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ArtistContainer = styled('div')`
  height: 100%;
  width: 100%;
`;

const HeaderContainer = styled('div')`
  height: 200px;
  position: relative;
`;
