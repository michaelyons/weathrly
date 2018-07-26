import { currWeather, sevenHour, tenDay } from "./helper.js";
import data from "./MockData.js";

describe("helper methods", () => {

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

  it("should take in data and filter to return the seven hour weather objects", () => {
    let sevenHourData = sevenHour(data);
    expect(sevenHourData).toEqual(
    [ {  time: '12:00 PM',
         temp: '47°F',
         condition: 'Partly Cloudy',
         icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
       { time: '1:00 PM',
         temp: '49°F',
         condition: 'Partly Cloudy',
         icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
       { time: '2:00 PM',
         temp: '49°F',
         condition: 'Partly Cloudy',
         icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
       { time: '3:00 PM',
         temp: '51°F',
         condition: 'Clear',
         icon_url: 'http://icons.wxug.com/i/c/k/clear.gif' },
       { time: '4:00 PM',
         temp: '50°F',
         condition: 'Clear',
         icon_url: 'http://icons.wxug.com/i/c/k/clear.gif' },
       { time: '5:00 PM',
         temp: '48°F',
         condition: 'Clear',
         icon_url: 'http://icons.wxug.com/i/c/k/clear.gif' },
       { time: '6:00 PM',
         temp: '45°F',
         condition: 'Clear',
         icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif' },
       { time: '7:00 PM',
         temp: '43°F',
         condition: 'Clear',
         icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif' } ]
    );
  });
});
