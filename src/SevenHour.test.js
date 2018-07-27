import React from "react";
import { shallow, mount } from "enzyme";
import data from "./MockData";
import { SevenHour } from "./SevenHour.js";
import { sevenHour } from "./helper.js";

describe("SevenHour", () => {
  let shallowWrapper;
  let mountWrapper;
  let sevenHourData = sevenHour(data);

  beforeEach(() => {
    shallowWrapper = shallow(<SevenHour sevenHour={sevenHourData} />);
    mountWrapper = mount(<SevenHour sevenHour={sevenHourData} />);
  });

  it("should exist", () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  });

  it("should create seven cards", () => {
    expect(shallowWrapper.props().children.length).toEqual(8);
    expect(mountWrapper.find("div").length).toEqual(9);
  });
});
