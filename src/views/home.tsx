import { default as HomeBackground } from '@Assets/images/music.svg';
import React from 'react';
import styled from 'styled-components';

const Home: React.FunctionComponent = (): React.ReactElement => (
  <Wrapper>
    <Background src={HomeBackground} />
  </Wrapper>
);

export default Home;

// Styled components

const Wrapper = styled('div')`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Background = styled('img')`
  font-size: 18px;
  text-align: center;
  width: 100%;
`;
