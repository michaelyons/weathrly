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

    this.getData = this.getData.bind(this);
  }

  getData() {
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
      .then(data => this.sendToLocalStorage());
  }

  locationChange(search) {
    this.setState({ location: search }, this.getData);
  }

  sendToLocalStorage() {
    let outgoingWeather = JSON.stringify(this.state);

    localStorage.setItem("incomingWeather", outgoingWeather);
  }

  retrieveFromLocalStorage() {
    let incomingWeather = JSON.parse(localStorage.getItem("incomingWeather"));

    this.getData(incomingWeather.location);
  }

  componentDidMount() {
    if (localStorage.incomingWeather) {
      this.retrieveFromLocalStorage();
    }
  }

  render() {
    // if (!this.state.location) {
    //   return (
    //     <div>
    //       <WelcomePage />
    //       <Search getData={this.getData} />
    //     </div>
    //   );
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
        <TenDay tenDay={this.state.tenDay} />
      </div>
    );
  }
}
// }

export default App;
