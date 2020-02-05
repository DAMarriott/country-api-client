import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../countryService";
import { Link } from "react-router-dom";

export default function CountryDetail({ items }) {
  let { id } = useParams();

  const [country, setCountry] = useState();

  useEffect(() => {
    getCountry(id).then(c => setCountry(c));
  }, [id]);

  console.log(country && country.name);

  return (
    <div>
      <Link to="/">Go back</Link>
      <h2>{country && country.name}</h2>
      <img src={country && country.flag} />
      <div>
        <p>Region: {country && country.region}</p>
        <p>Capital: {country && country.capital}</p>
        <p>Population: {country && country.population}</p>
      </div>
      <div>
        <p>Main Language: {country && country.languages[0].name}</p>
        <p>Main Currency: {country && country.currencies[0].name}</p>
      </div>
      <div>
        <p>Bordering Countries</p>
        <Link to={"/" + (country && country.borders[0])}>
          {country && country.borders[0]}
        </Link>
      </div>
    </div>
  );
}
