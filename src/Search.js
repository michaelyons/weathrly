import React, { Component } from "react";
import "./css/Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  render() {
    return (
      <div>
        <div className="first-input">
          <input
            type="text"
            value={this.state.searchInput}
            placeholder="enter a city or zip code"
            onChange={event => {
              this.setState({ searchInput: event.target.value });
            }}
          />
          <button
            onClick={event => this.props.dataFetch(this.state.searchInput)}
            className="search-button"
          >
            submit
          </button>
        </div>
        <div className="second-input">
          <input
            type="text"
            value={this.state.searchInput}
            placeholder="enter a state"
            onChange={event => {
              this.setState({ searchInput: event.target.value });
            }}
          />

          <button
            onClick={event => this.props.dataFetch(this.state.searchInput)}
            className="search-button"
          >
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
