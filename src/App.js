import React, { Component } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather.js";
import Key from "./key.js";
import Search from "./Search.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      currentWeather: []  
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(
      `http://api.wunderground.com/api/${Key}/conditions/geolookup/hourly/forecast10day/q/CA/San_Diego.json`
    )
      .then(data => data.json())
      .then(data => console.log(data))
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
    }
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
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
