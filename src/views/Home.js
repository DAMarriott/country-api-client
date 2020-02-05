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
      filteredItems: null
    };
  }

  filterChange(value) {
    console.log(value);
    const filteredItems = this.state.items.filter(
      item => item.region === value
    );
    this.setState({
      filteredItems
    });
  }

  handleInputChange(textInputValue) {
    console.log(textInputValue);
    const filteredItems = this.state.items.filter(item =>
      // Uses includes instead of indexOf to intentionally string match the keyword/query
      // e.g. Republic of China...
      item.name.toLowerCase().includes(textInputValue)
    );
    console.log(filteredItems);
    this.setState({
      filteredItems
    });
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
    const { items, filteredItems } = this.state;
    console.log(this.state.items);
    return (
      <div>
        <SearchBar
          inputRef={input => (this.textInput = input)}
          handleInputChange={val => this.handleInputChange(val)}
        />
        <FilterForm filterChange={val => this.filterChange(val)} />
        <CountryAPI items={filteredItems ? filteredItems : items} />
      </div>
    );
  }
}

export default Home;
