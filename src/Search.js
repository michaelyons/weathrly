import React, { Component } from "react";
import "./css/Search.css";
import { PrefixTrie } from "complete-me";
import citiesList from "./citiesList.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.locationSubmit = this.locationSubmit.bind(this);
    this.newLocation = this.newLocation.bind(this);
    this.state = {
      searchInput: "",
      autoCompleteResults: []
    };
  }

  locationSubmit() {
    this.props.getData(this.state.location);
    this.setState({
      searchInput: "",
      prefixTrie: null
    });
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
    this.autoCompleteResults();
  }

  newLocation(event) {
    this.setState({ location: event.target.value });
  }

  displayAutoSuggestions() {
    if (this.state.searchInput.length > 2) {
      return (
        this.state.autoCompleteResults.map(result => {
          return <option value={result}></option>
        }).slice(0, 9)
      )
    }
  }

  componentDidMount() {
    const prefixTrie = new PrefixTrie();
    prefixTrie.populate(citiesList.data)
    this.setState({
      prefixTrie
    })
  }

  autoCompleteResults() {
    const cityArray = this.state.prefixTrie.suggest(this.state.searchInput);
    
    this.setState({
      autoCompleteResults: cityArray
    })
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.dataFetch(this.state.searchInput)
        }
        }>
        <input
          className="first-input"
          type="text"
          list="input-populate"
          value={this.state.searchInput}
          placeholder="enter city, state/zip code"
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <datalist id="input-populate">
          {this.displayAutoSuggestions()}
        </datalist>
        <button
          className="search-button"
        >
          submit
          </button>
      </form>
    );
  }
}

export default Search;
