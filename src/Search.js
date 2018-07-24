import React, { Component } from "react";
import "./css/Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.locationSubmit = this.locationSubmit.bind(this);
    this.newLocation = this.newLocation.bind(this);
    this.state = {
      searchInput: ""
    };
  }

  locationSubmit() {
    this.props.getData(this.state.location);
    this.setState({
      searchInput: ""
    });
  }

  newLocation(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    return (
      <div>
          <input
            className="first-input"
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
    );
  }
}

export default Search;
