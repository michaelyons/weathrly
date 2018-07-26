import { currWeather, sevenHour, tenDay } from "./helper.js";
import data from "./MockData.js";

describe("CurrentWeather", () => {
  it("should take in data and filter to return the current weather object", () => {
    let helpData = currWeather(data);
    const date = new Date();
    const realTime = date.toLocaleTimeString();

    expect(helpData).toEqual({
      conditions: "Partly Cloudy",
      current: "46°F",
      high: "51°F",
      icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      location: "Louisville, KY",
      low: "32°F",
      time: "Last Updated " + realTime
    });
  });
});
