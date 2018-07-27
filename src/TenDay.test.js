import React from "react";
import { shallow, mount } from "enzyme";
import data from "./MockData";
import TenDay from "./TenDay.js";
import { tenDay } from "./helper.js";

describe("TenDay", () => {
  let shallowWrapper;
  let mountWrapper;
  let tenDayData = tenDay(data);

  beforeEach(() => {
    shallowWrapper = shallow(<TenDay tenDay={tenDayData} />);
    mountWrapper = mount(<TenDay tenDay={tenDayData} />);
  });

  it("should exist", () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  });

  it("should create ten cards", () => {
    expect(shallowWrapper.props().children.length).toEqual(8);
    expect(mountWrapper.find("div").length).toEqual(9);
  });
});
