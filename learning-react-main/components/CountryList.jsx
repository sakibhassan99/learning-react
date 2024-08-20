import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import HomeSkeleton from "./HomeSkeleton";
import CountryError from "./CountryError";

export default function CountryList({ query }) {
  let [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json().then((data) => {
        setCountriesData(data);
      })
    );
  }, []);

  return countriesData.length === 0 ? (
    <HomeSkeleton />
  ) : (
    <div className="countries-container">
      {countriesData.length > 0 ? (
        countriesData
          .filter(
            (country) =>
              country.name.common.toLowerCase().includes(query) ||
              country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                population={country.population.toLocaleString("en-in")}
                region={country.region}
                capital={country.capital ? country.capital[0] : "N/A"}
                image={country.flags.svg}
                data={country}
              />
            );
          })
      ) : (
        <CountryError />
      )}
    </div>
  );
}
