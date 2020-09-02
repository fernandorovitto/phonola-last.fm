import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Album } from '@Store/artists/types';
import { Carousel } from 'react-responsive-carousel';
import defaultArtistCover from '@Assets/images/defaultArtistCover.png';
import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

interface PropsFromState {
  albums: Album[];
}

export type IProps = PropsFromState;

class CarouselAlbumList extends React.Component<IProps> {
  private _getImage = (image: string): string =>
    image !== '' ? image : defaultArtistCover;

  private _carouselItem = (album: Album, index: number): React.ReactChild => (
    <Item key={index}>
      <ImageContainer src={this._getImage(album.image.xl)} />
      <Description>
        <ItemName variant="h4" align="left">
          {album.name}
        </ItemName>
        <ItemCombo>
          <ItemListeners variant="subtitle1" align="right">
            {album.playcount.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}{' '}
            times played
          </ItemListeners>
        </ItemCombo>
      </Description>
    </Item>
  );

  private _carouselItems = (): React.ReactChild[] =>
    this.props.albums.map(
      (album: Album, index: number): React.ReactChild =>
        this._carouselItem(album, index),
    );

  public render(): React.ReactNode {
    return (
      <Wrapper>
        <Carousel {...carouselConfig}>{this._carouselItems()}</Carousel>
      </Wrapper>
    );
  }
}

export default CarouselAlbumList;

// Carousel configuration

const carouselConfig = {
  autoPlay: false,
  dynamicHeight: false,
  emulateTouch: true,
  infiniteLoop: true,
  interval: 5000,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: false,
  stopOnHover: false,
  swipeScrollTolerance: 5,
  swipeable: true,
  thumbWidth: 100,
  transitionTime: 150,
  useKeyboardArrows: true,
};

// Styled components

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const Item = styled('div')``;

const ItemName = styled(Typography)`
  color: white;
  height: 80px;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  width: 100%;
`;
const ItemListeners = styled(Typography)`
  color: #fff531;
`;
const ItemCombo = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Description = styled('div')`
  align-items: flex-end;
  background: #000;
  border-radius: 100px 0 0 100px;
  bottom: 50px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 25%;
  justify-content: space-around;
  left: 10%;
  opacity: 0.5;
  padding: 10px 10px 10px 50px;
  position: absolute;
  text-align: center;
  width: 90%;
`;

const ImageContainer = styled('img')`
  border: 1px rgba(255, 255, 255, 0.5) solid;
  max-height: 100%;
  max-width: 100%;
`;
