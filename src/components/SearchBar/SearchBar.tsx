import { RouteComponentProps, withRouter } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import { searchArtistAction } from '@Store/artists/actions';
import SearchInput from '@Components/SearchInput/SearchInput';
import styled from 'styled-components';

interface PropsFromDispatch extends RouteComponentProps {
  searchArtistAction: typeof searchArtistAction;
}

export type IProps = PropsFromDispatch;

class SearchBar extends React.Component<IProps> {
  private _search = (value: string): void => {
    this.props.history.push('/searchResults');
    this.props.searchArtistAction(value);
  };

  public render(): React.ReactElement {
    return (
      <SearchBarContainer>
        <SearchInput search={this._search} />
      </SearchBarContainer>
    );
  }
}

const mapDispatchToProps = {
  searchArtistAction,
};

export const TestComponent = SearchBar;

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));

// Styled components

const SearchBarContainer = styled('div')`
  display: flex;
  height: 30px;
`;
