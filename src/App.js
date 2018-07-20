import React, { Component } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather.js";
import Key from "./key.js";
import Search from "./Search.js";
import { currentDayForecast } from "./helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      city: "",
      state: "",
      currentWeather: null
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(
      `http://api.wunderground.com/api/${Key}/conditions/geolookup/hourly/forecast10day/q/CA/San_Diego.json`
    )
      .then(data => data.json())
      .then(data =>
        this.setState({
          location: data.current_observation.display_location.full,
          currentWeather: currentDayForecast(data)
        })
      );
    // .catch(error => {
    //   throw new Error(error);
    // });
  }

  // componentDidMount() {
  //   this.getData();
  // }

  locationChange(search) {
    this.setState({ location: search }, this.getData);
  }

  render() {
    // if (!this.state.currentWeather) {
    //   return <h2>Hi Paul</h2>;
    // } else {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <Search dataFetch={this.locationChange} />
        <CurrentWeather
          location={this.state.location}
          city={this.state.city}
          state={this.state.state}
          current={this.state.current}
          high={this.state.high}
          low={this.state.low}
          conditions={this.state.conditions}
          icon={this.state.icon}
        />
      </div>
    );
  }
}
// }

export default App;
