import React, { Component } from "react";
import CountryAPI from "../components/CountryAPI";
import FilterForm from "../components/FilterForm";
import SearchBar from "../components/SearchBar";
import { getCountries } from "../countryService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      filteredItems: []
    };
  }

  handleInputChange(textInputValue) {
    this.setState({
      filteredItems: this.state.items.find(textInputValue)
    });
    console.log(this.state.filteredItems);
  }

  componentDidMount() {
    getCountries().then(
      result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          inputRef={input => (this.textInput = input)}
          handleInputChange={this.handleInputChange}
        />
        <FilterForm />
        <CountryAPI
          items={this.state.items}
          filteredItems={this.state.filteredItems}
        />
      </div>
    );
  }
}

export default Home;
