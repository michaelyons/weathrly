import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import App from './App';
// import localStorage from './setupTests'

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', () => {
    let shallowWrapper;
    let mountWrapper;

beforeEach() => {
  shallow =shallow(<App />)
  mount = mount(<App />)
}

}

