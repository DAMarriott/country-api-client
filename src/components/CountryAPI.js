import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CountryAPI extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(items => (
          <li key={items.name}>
            <Link to={`/${items.name}`}>
              <img src={items.flag} />
              <h3>{items.name}</h3>
              <p>Region: {items.region}</p>
              <p>Capital: {items.capital}</p>
              <p>Population: {items.population}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
