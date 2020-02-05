import React, { Component } from "react";

export default class SearchBar extends React.Component {
  handleChangeEvent(event) {
    event.preventDefault();

    // By giving the input the `ref` attribute, we can access it anywhere
    const textInputValue = event.target.value.toLowerCase();

    // Submit the value to the parent component
    this.props.handleInputChange(textInputValue);
  }

  render() {
    return (
      <div className="searchbar">
        <input
          className="search-input"
          type="search"
          id="search"
          ref="input"
          onChange={e => this.handleChangeEvent(e)}
          placeholder="Search for a country..."
        />
      </div>
    );
  }
}
