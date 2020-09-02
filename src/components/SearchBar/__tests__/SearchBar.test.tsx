import 'jest-styled-components';
import { IProps, TestComponent } from '../SearchBar';
import { createMemoryHistory } from 'history';
import { location } from '@Utils/test/models/location';
import { match } from '@Utils/test/models/match';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test for SearchBar Component', () => {
  test('Should render the component', () => {
    const history = createMemoryHistory();
    const props: IProps = {
      history,
      location,
      match,
      searchArtistAction: jest.fn(),
    };
    const tree = renderer.create(
      <Router>
        <TestComponent {...props} />
      </Router>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
