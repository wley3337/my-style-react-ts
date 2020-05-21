import React from 'react';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  const callBack = jest.fn();
  const didRender = shallow();
  expect(didRender).toBeDefined;
});
