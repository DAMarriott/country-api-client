import React, { Component } from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-name">
          <p>where</p>
          <span>in the</span>
          <p>world?</p>
        </div>

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
