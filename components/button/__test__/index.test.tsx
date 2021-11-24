import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../tests/mountTest';
import Button from '../index';

mountTest(Button);

describe('Button', () => {
  it('render button count correctly', () => {
    const component = mount(<Button />);

    expect(component.find('h3').text()).toBe('This is Button');
  });
});
