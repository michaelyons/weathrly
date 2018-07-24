import React from 'react';
import { configure , shallow, mount } from 'enzyme'
import App from './App';
import localStorage from './setupTests'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  let shallowWrapper;
  let mountWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<App />)
    mountWrapper = mount(<App />)
    console.log(shallowWrapper);
  })

  it('should exist', () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  })

  it('should have a default state containing an empty string for location', () => {
    expect(shallowWrapper.state().location).toEqual('');
  })

  it('should have a default state containing an empty string for location', () => {
    expect(shallowWrapper.state().location).toEqual('');
  })

  it('should have a default state containing an empty string for location', () => {
    expect(shallowWrapper.state().location).toEqual('');
  })

  it('should render a Welcome and Search component on default', () => {
    expect(shallowWrapper.find('WelcomePage').length).toEqual(1);
    expect(shallowWrapper.find('Search').length).toEqual(1);
  })

  // it('should render a Search, Welcome, CurrentWeather, SevenHour, and TenDay components', () => {
  //   shallowWrapper.instance().locationChange("poop");
  //   expect(shallowWrapper.find('Search').length).toEqual(1);
  //   expect(shallowWrapper.find('CurrentWeather').length).toEqual(1);
  //   expect(shallowWrapper.find('SevenHour').length).toEqual(1);
  //   expect(shallowWrapper.find('TenDay').length).toEqual(1);
  // })
});