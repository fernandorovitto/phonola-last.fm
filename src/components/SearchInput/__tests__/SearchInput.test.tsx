import 'jest-styled-components';
import SearchInput, { IProps } from '../SearchInput';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test for SearchInput Component', () => {
  test('Should render the component', () => {
    const props: IProps = {
      search: jest.fn(),
    };
    const tree = renderer.create(<SearchInput {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
