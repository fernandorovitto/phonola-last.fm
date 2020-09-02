import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import SimpleMessage from '../SimpleMessage';

describe('Test for SimpleMessage Component', () => {
  test('Should render the component', () => {
    const tree = renderer.create(<SimpleMessage text={'TEST'} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
