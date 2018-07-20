import React, { Component } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather.js";
import Key from "./key.js";
import Search from "./Search.js";
import helper from "./helper.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      city: "",
      state: "",
      currentWeather: []
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
      )
      .catch(error => {
        throw new Error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.currentWeather === undefined) {
      return <div>Data Loading</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Weathrly</h1>
          </header>
          <form>
            <input type="text" />
            <input type="submit" />
          </form>
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
}

export default App;
