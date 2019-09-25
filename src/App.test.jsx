import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('adds todo to list', () => {
    const wrapper = shallow(<App />);

    wrapper.find('input').simulate('change', {
      target: { value: 'Test todo' }
    });
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('input').props().value).toBe('');
    expect(wrapper.find('ul').children()).toHaveLength(1);
    expect(wrapper.find('li').text()).toBe('Test todo');
  });
});
