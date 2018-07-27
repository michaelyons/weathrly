import React, { Component } from "react";
import "./css/Search.css";
import { PrefixTrie } from "complete-me";
import citiesList from "./citiesList.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      autoCompleteResults: []
    };
    this.locationSubmit = this.locationSubmit.bind(this);
    this.setNewLocation = this.setNewLocation.bind(this);
  }

  componentDidMount() {
    const prefixTrie = new PrefixTrie();

    prefixTrie.populate(citiesList.data);
    this.setState({
      prefixTrie
    });
  }

  locationSubmit(event) {
    event.preventDefault();
    this.props.dataFetch(this.state.searchInput);
    this.setState({
      searchInput: ""
    });
  }

  updateUserInputState(event) {
    this.setState({ searchInput: event.target.value });
    this.autoCompleteResults();
  }

  setNewLocation(event) {
    this.setState({ location: event.target.value });
  }

  displayAutoSuggestions() {
    if (this.state.searchInput.length > 2) {
      return this.state.autoCompleteResults
        .map((result, index) => {
          return <option value={result} key={index}/>;
        })
        .slice(0, 15);
    }
  }


  autoCompleteResults() {
    const cityArray = this.state.prefixTrie.suggest(this.state.searchInput);

    this.setState({
      autoCompleteResults: cityArray
    });
  }

  render() {
    return (
      <form onSubmit={event => this.locationSubmit(event)}>
        <input
          className="first-input"
          type="text"
          list="input-populate"
          value={this.state.searchInput}
          placeholder="enter city, state/zip code"
          onChange={event => {
            this.updateUserInputState(event);
          }}
        />
        <datalist id="input-populate">{this.displayAutoSuggestions()}</datalist>
        <button className="search-button">submit</button>
      </form>
    );
  }
}

export default Search;
