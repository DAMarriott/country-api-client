import React, { Component } from "react";

export default class FilterForm extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Filter by Region</label>
          <select id="filter" default="none" placeholder="Filter by Region">
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </fieldset>
      </form>
    );
  }
}
