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

  it("should take in data and filter to return the ten day weather objects", () => {
    let tenDayData = tenDay(data);
    expect(tenDayData).toEqual(
    [ {  day: 'Wednesday',
         date: '12/20/2017',
         high: '51°F',
         low: '32°F',
         icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
       { day: 'Thursday',
         date: '12/21/2017',
         high: '55°F',
         low: '51°F',
         icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
       { day: 'Friday',
         date: '12/22/2017',
         high: '57°F',
         low: '44°F',
         icon: 'http://icons.wxug.com/i/c/k/chancerain.gif' },
       { day: 'Saturday',
         date: '12/23/2017',
         high: '47°F',
         low: '30°F',
         icon: 'http://icons.wxug.com/i/c/k/rain.gif' },
       { day: 'Sunday',
         date: '12/24/2017',
         high: '37°F',
         low: '22°F',
         icon: 'http://icons.wxug.com/i/c/k/cloudy.gif' },
       { day: 'Monday',
         date: '12/25/2017',
         high: '35°F',
         low: '19°F',
         icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
       { day: 'Tuesday',
         date: '12/26/2017',
         high: '32°F',
         low: '20°F',
         icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
       { day: 'Wednesday',
         date: '12/27/2017',
         high: '33°F',
         low: '26°F',
         icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
       { day: 'Thursday',
         date: '12/28/2017',
         high: '35°F',
         low: '23°F',
         icon: 'http://icons.wxug.com/i/c/k/snow.gif' },
       { day: 'Friday',
         date: '12/29/2017',
         high: '31°F',
         low: '18°F',
         icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' } ]
      )
    });
  });
