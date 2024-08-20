import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  population,
  flag,
  region,
  capital,
  data,
}) {
  return (
    <Link to={`/${name}`} state={data} className="country-card">
      <div className="image-container">
        <img src={flag} />
      </div>
      <div className="country-info">
        <h2 id="countryName">{name}</h2>
        <p>
          Population: <span id="population">{population}</span>
        </p>
        <p>
          Region: <span id="region">{region}</span>
        </p>
        <p>
          Capital: <span id="capital">{capital}</span>
        </p>
      </div>
    </Link>
  );
}
