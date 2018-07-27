import React from "react";
import { shallow, mount } from "enzyme";
import data from "./MockData";
import CurrentWeather from "./CurrentWeather.js";
import { currWeather } from "./helper.js";

describe("currentWeather", () => {
  let shallowWrapper;
  let mountWrapper;
  let currentWeatherData = currWeather(data);

  beforeEach(() => {
    shallowWrapper = shallow(
      <CurrentWeather currWeather={currentWeatherData} />
    );
    mountWrapper = mount(<CurrentWeather currWeather={currentWeatherData} />);
  });

  it("should exist", () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  });

  it("should create a card", () => {
    expect(mountWrapper.find("div").length).toEqual(2);
    expect(mountWrapper.find("h2").length).toEqual(2);
    expect(mountWrapper.find("h3").length).toEqual(1);
    expect(mountWrapper.find("p").length).toEqual(2);
    expect(mountWrapper.find("img").length).toEqual(1);
  });
});
