import 'jest-styled-components';
import LoadingLinear from '../LoadingLinear';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test for LoadingLinear Component', () => {
  test('Should render the component', () => {
    const tree = renderer.create(<LoadingLinear text={'Loading'} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
