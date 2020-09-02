import 'jest-styled-components';
import Biography, { IProps } from '../Biography';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Test for Biography Component', () => {
  test('Should render the component', () => {
    const props: IProps = {
      briefBio: 'Short text',
      fullBio: 'extended text',
    };
    const tree = renderer.create(<Biography {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
