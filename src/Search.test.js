import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import Search from './Search.js';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Search', () => {
  let shallowWrapper;
  let mountWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<Search />)
    mountWrapper = mount(<Search />)
  })

  it('should exist', () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  })

  it('should render and input and a button', () => {
    expect(shallowWrapper.find('input').length).toEqual(1);
    expect(shallowWrapper.find('button').length).toEqual(1);
  })

  it('should change the value within the input box', () => {
    let searchInput = shallowWrapper.find('input');


    searchInput.simulate('change', { target: { value: 'denver' } });
    expect(shallowWrapper.state().searchInput).toEqual('denver');
  })

  it('should simulate a button click and track that is has been clicked', () => {
    const mockCallBack = jest.fn();

    let wrapperOne = shallow(<Search dataFetch={() => mockCallBack()} />)
    let searchBtn = wrapperOne.find('button');

    searchBtn.simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  })

})