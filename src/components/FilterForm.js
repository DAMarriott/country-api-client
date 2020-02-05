import React, { Component } from "react";

export default class FilterForm extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <select
            id="filter"
            default="none"
            onChange={e => this.props.filterChange(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </fieldset>
      </form>
    );
  }
}
