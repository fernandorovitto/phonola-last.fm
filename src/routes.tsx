import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ArtistInfo from '@Views/ArtistInfo/ArtistInfo';
import ArtistSearch from '@Views/ArtistsSearch/ArtistSearch';
import Body from '@Components/Body';
import Header from '@Components/Header';
import Home from '@Views/home';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

const Routes: React.FunctionComponent = () => (
  <Root>
    <Header title="phonola" />
    <Redirect from="/" to="/home" />
    <Body>
      <Scrollbars
        autoHide={true}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: 'grey',
              marginLeft: '0',
              marginRight: '0',
            }}
          />
        )}
      >
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" exact={true} component={Home} />
          <Route
            path="/searchResults/:value"
            exact={true}
            component={ArtistSearch}
          />
          <Route path="/searchResults" exact={true} component={ArtistSearch} />
          <Route path="/artist" exact={true} component={ArtistInfo} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </Scrollbars>
    </Body>
  </Root>
);

export default Routes;

const Root = styled('div')`
  align-items: center;
  background-color: #090e11;
  color: #e5e5e5;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;
