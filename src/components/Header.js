import React, { Component } from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <p>Where in the world?</p>
        <button
          className="dark-toggle"
          type="button"
          onClick={this.props.handleThemeSwitch}
        >
          Dark Mode
        </button>
      </header>
    );
  }
}
