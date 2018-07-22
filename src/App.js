import React, { Component } from "react";
import "./css/App.css";
import CurrentWeather from "./CurrentWeather.js";
import SevenHour from "./SevenHour.js";
import Key from "./key.js";
import Search from "./Search.js";
import { currWeather, sevenHour } from "./helper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      currWeather: {},
      sevenHour: []
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log(this.state);
    fetch(
      `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${
        this.state.location
      }.json`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          location: data.current_observation.display_location.full,
          currWeather: currWeather(data),
          sevenHour: sevenHour(data)
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
          <link
            href="https://fonts.googleapis.com/css?family=Luckiest+Guy"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <h1 className="App-title">weathrly.</h1>
        </header>
        <Search dataFetch={e => this.locationChange(e)} />
        <CurrentWeather currWeather={this.state.currWeather} />
        <SevenHour sevenHour={this.state.sevenHour} />
      </div>
    );
  }
}
// }

export default App;
