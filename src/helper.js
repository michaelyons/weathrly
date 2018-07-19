const currentDayForecast = 
data.forecast.simpleforecast.forecastday.find(currentDayForecast =>  
  currentDayForecast.period === 1)

const currentDayForecastObject = { 
  time: data.current_observation.observation_time, 
  location: data.current_observation.display_location.full, 
  current: data.current_observation.temp_f + '°F', 
  high: currentDayForecast.high.fahrenheit + '°F', 
  low: currentDayForecast.low.fahrenheit + '°F', 
  conditions: currentDayForecast.conditions, 
  icon: currentDayForecast.icon_url
}

