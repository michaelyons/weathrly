import React, { Component } from "react";

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
        <input
          type="text"
          value={this.state.searchInput}
          placeholder="Enter a City and State or Zip Code."
          onChange={event => {
            this.setState({ searchInput: event.target.value });
          }}
        />
        <button
          onClick={event => {
            event.preventDefault();
            this.props.dataFetch(this.state.searchInput);
          }}
        >
          ENTER
        </button>
      </div>
    );
  }
}

export default Search;
