export const currentDayForecast = data => {
  let x = data.forecast.simpleforecast.forecastday.find(
    currentDayForecast => currentDayForecast.period === 1
  );

  const currentDayForecastObject = {
    time: data.current_observation.observation_time,
    location: data.current_observation.display_location.full,
    current: data.current_observation.temp_f + "°F",
    high: x.high.fahrenheit + "°F",
    low: x.low.fahrenheit + "°F",
    conditions: x.conditions,
    icon: x.icon_url
  };

  return currentDayForecastObject;
};

// const sevenHourForecast = data.hourly_forecast
//   .filter(obj => Object.values(obj)[0])
//   .reduce((sevenHour, hour, i) => {
//     if (i < 8) {
//       sevenHour.push({
//         time: hour.FCTTIME.civil,
//         temp: hour.temp.english + "°F",
//         condition: hour.condition,
//         icon_url: hour.icon_url
//       });
//     }
//     return sevenHour;
//   }, []);

// const tenDay = data.forecast.simpleforecast.forecastday.map(obj => {
//   return {
//     day: obj.date.weekday,
//     date: obj.date.month + "/" + obj.date.day + "/" + obj.date.year,
//     high: obj.high.fahrenheit + "°F",
//     low: obj.low.fahrenheit + "°F",
//     icon: obj.icon_url
//   };
// });
