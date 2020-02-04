import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import CountryDetail from "./views/CountryDetail";
import Header from "./components/Header";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }

  handleThemeSwitch = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  };

  render() {
    return (
      <div className={"body-theme " + this.state.theme}>
        <Header handleThemeSwitch={this.handleThemeSwitch} />
        <main className="App__main">
          <Route exact path="/" children={<Home />} />
          <Route path={"/:id"} children={<CountryDetail />} />
        </main>
      </div>
    );
  }
}

export default App;
