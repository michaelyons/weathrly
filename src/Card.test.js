import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import Card from './Card.js';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Card', () => {
  let tenDayWrapper;
  let sevenHourWrapper;
  let tenDayData = {
  date:"7/24/2018",
  day:"Tuesday",
  high:"101°F",
  icon:"http://icons.wxug.com/i/c/k/clear.gif",
  low:"74°F"
  }
  let sevenHourData = {
    condition:"Clear",
    icon:"http://icons.wxug.com/i/c/k/clear.gif",
    temp:"80°F",
    time:"12:00 PM"
  }

  beforeEach(() => {
    tenDayWrapper = mount(<Card 
      date={tenDayData.date}
      day={tenDayData.day}
      high={tenDayData.high}
      icon={tenDayData.icon}
      low={tenDayData.low}
   />)
  })

  it('should exist', () => {
    expect(tenDayWrapper).toBeDefined();
  })

  it('should create tenDay Cards', () => {
    expect(tenDayWrapper.find('h2').length).toEqual(3);
    expect(tenDayWrapper.find('p').length).toEqual(1);
  })

  beforeEach(() => {
    sevenHourWrapper = mount(<Card 
      condition={sevenHourData.condition}
      icon={sevenHourData.icon}
      temp={sevenHourData.temp}
      time={sevenHourData.time}
   />)
  })

  it('should exist', () => {
    expect(sevenHourWrapper).toBeDefined();
  })

  it('should create sevenHour Cards', () => {
    expect(sevenHourWrapper.find('h2').length).toEqual(1);
    expect(sevenHourWrapper.find('p').length).toEqual(1);
  })
})