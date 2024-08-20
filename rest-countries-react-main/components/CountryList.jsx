import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import HomeSkeleton from "./HomeSkeleton";

export default function CountryList({ query }) {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return countriesData.length === 0 ? (
    <HomeSkeleton />
  ) : (
    countriesData
      .filter(
        (countryData) =>
          countryData.name.common.toLowerCase().includes(query) ||
          countryData.region.toLowerCase().includes(query)
      )
      .map((countryData) => {
        return (
          <CountryCard
            key={countryData.name.common}
            name={countryData.name.common}
            flag={countryData.flags.svg}
            population={countryData.population.toLocaleString("en-in")}
            region={countryData.region}
            capital={countryData.capital ? countryData.capital[0] : "N/A"}
            data={countryData}
          />
        );
      })
  );
}
