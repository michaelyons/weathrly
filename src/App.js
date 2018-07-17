import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import MockData from "./MockData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <form>
          <input type="submit" />
        </form>
        <MockData />
        <Search />
        <Card />
        <CurrentWeather />
        <SevenHour />
        <TenDay />
      </div>
    );
  }
}

export default App;
