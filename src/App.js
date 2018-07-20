import React, { Component } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather.js";
import Key from "./key.js";
import Search from "./Search.js";
import { currWeather, sevenHour, tenDay } from "./helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "denver, co",
      currWeather: {}
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(
      `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${
        this.state.location
      }.json`
    )
      .then(data => data.json())
      .then(data => {
        console.log(currWeather(data));
        this.setState({
          location: data.current_observation.display_location.full,
          currWeather: currWeather(data)
        });
      });
    // .catch(error => {
    //   throw new Error(error);
    // });
  }

  componentDidMount() {
    this.getData();
  }

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
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <Search dataFetch={this.locationChange} />
        <CurrentWeather currWeather={this.state.currWeather} />
      </div>
    );
  }
}
// }

export default App;
