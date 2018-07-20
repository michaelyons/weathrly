import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={event => {
            this.setState({ searchInput: event.target.value });
          }}
        />
        <button onClick={event => this.props.dataFetch(this.state.searchInput)}>
          ENTER
        </button>
      </div>
    );
  }
}

export default Search;
