import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Header from '../Header';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
describe('Test for Header Component', () => {
  test('Should render the component', () => {
    const wrapper = shallow(<Header title={'Super title'} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Should have the specific title', () => {
    const title = 'Test title';
    const wrapper = shallow(<Header title={title} />);
    expect(wrapper.contains(title)).toBe(true);
  });
});
