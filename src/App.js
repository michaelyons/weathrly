import React, { Component } from "react";
import "./css/App.css";
import WelcomePage from "./Welcome.js";
import CurrentWeather from "./CurrentWeather.js";
import SevenHour from "./SevenHour.js";
import TenDay from "./TenDay.js";
import Key from "./key.js";
import Search from "./Search.js";
import { currWeather, sevenHour, tenDay } from "./helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      currWeather: {},
      sevenHour: [],
      tenDay: []
    };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  componentDidMount() {
    if (localStorage.incomingWeather) {
      this.locationChange(JSON.parse(localStorage.incomingWeather).location);
    }
  }
  
  fetchWeatherData() {
    const url = `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${
      this.state.location
    }.json`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          location: data.current_observation.display_location.full,
          currWeather: currWeather(data),
          sevenHour: sevenHour(data),
          tenDay: tenDay(data)
        });
      })
      .then(data => this.sendToLocalStorage(data))
      .catch(error => {
        localStorage.clear();
        this.setState({ searchInput: "" });
        alert("Location entered not valid, please enter valid location");
      });
  }

  locationChange(search) {
    this.setState({ location: search }, this.fetchWeatherData);
  }

  sendToLocalStorage() {
    let outgoingWeather = JSON.stringify(this.state);

    localStorage.setItem("incomingWeather", outgoingWeather);
  }


  render() {
    if (!this.state.location) {
      return (
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <WelcomePage />
          <Search dataFetch={e => this.locationChange(e)} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <link
              href="https://fonts.googleapis.com/css?family=Raleway"
              rel="stylesheet"
            />
            <h1 className="App-title">{this.state.location}</h1>
          </header>
          <Search dataFetch={e => this.locationChange(e)} />
          <CurrentWeather currWeather={this.state.currWeather} />
          <SevenHour sevenHour={this.state.sevenHour} />
          <TenDay tenDay={this.state.tenDay} />
        </div>
      );
    }
  }
}

export default App;
