import { useEffect, useState } from "react";
import "./CountryDetail.css";
import CountrySkeleton from "./CountrySkeleton";
import CountryError from "./CountryError";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  const [isDark] = useTheme();
  const { state } = useLocation();
  const { country } = useParams();

  const [countryData, setCountryData] = useState([]);
  const [errorState, setErrorState] = useState(false);

  function createCountryCard(data) {
    setCountryData({
      name: data.name.common,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0].common
        : "N/A",
      population: data.population.toLocaleString("en-in"),
      flag: data.flags.svg,
      capital: data.capital ? data.capital[0] : "N/A",
      region: data.region,
      subregion: data.subregion ? data.subregion : "N/A",
      languages: data.languages
        ? Object.values(data.languages).join(", ") + "."
        : "N/A",
      borders: [],
    });

    if (data.borders) {
      Promise.all(
        data.borders.map((border) => {
          return fetch(
            `https://restcountries.com/v3.1/alpha/${border}?fullText=true`
          )
            .then((res) => res.json())
            .then(([borderData]) => {
              return borderData.name.common;
            });
        })
      ).then((borders) => {
        setCountryData((prevState) => ({
          ...prevState,
          borders: [...borders],
        }));
      });
    }
  }

  useEffect(() => {
    if (state) {
      createCountryCard(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        createCountryCard(data);
      })
      .catch((err) => {
        console.log(err);
        setErrorState(true);
      });
  }, [country]);

  if (errorState) {
    return <CountryError />;
  }

  return countryData.length === 0 ? (
    <CountrySkeleton />
  ) : (
    <section id="country-container" className={`${isDark ? "dark-mode" : ""}`}>
      <div className="button-container">
        <span id="back_btn" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </span>
      </div>
      <div className="country-details">
        <div className="country-image-container">
          <img className="countryImg" src={countryData.flag} />
        </div>
        <div className="country-info">
          <h2 id="countryName">{countryData.name}</h2>
          <div className="details_container">
            <div className="left-details">
              <p>
                Native Name:
                <span id="nativeName"> {countryData.nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span id="population">{countryData.population}</span>
              </p>
              <p>
                Region: <span id="region">{countryData.region}</span>
              </p>
              <p>
                Sub Region: <span id="subRegion">{countryData.subregion}</span>
              </p>
              <p>
                Capital: <span id="capital">{countryData.capital}</span>
              </p>
            </div>
            <div className="right-details">
              <p>
                Top Level Domain:{" "}
                <span id="domain">
                  {countryData.tld ? countryData.tld[0] : "N/A"}
                </span>
              </p>
              <p>
                Currencies:{" "}
                <span id="currencies">
                  {countryData.currencies
                    ? Object.values(countryData.currencies)
                        .map((currency) => currency.name)
                        .join(", ") + "."
                    : "N/A"}
                </span>
              </p>
              <p>
                Languages: <span id="languages">{countryData.languages}</span>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries: </p>
            <div className="countries">
              {countryData.borders.map((border) => {
                return (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
