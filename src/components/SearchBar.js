import React, { Component } from "react";

export default class SearchBar extends React.Component {
  handleChangeEvent(event) {
    event.preventDefault();

    // By giving the input the `ref` attribute, we can access it anywhere
    const textInputValue = this.ref.input.value;

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
          onChange={this.handleChangeEvent}
          placeholder="Search for a country..."
        />
      </div>
    );
  }
}
