import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CountrySkeleton from "./CountrySkeleton";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  const { country } = useParams();
  const [countryData, setCountryData] = useState([]);
  const { state } = useLocation();
  const [isDarkMode] = useTheme();

  function createCountryDetail(data) {
    setCountryData({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0].common
        : "N/A",
      population: data.population.toLocaleString("en-in"),
      region: data.region,
      subRegion: data.subregion ? data.subregion : "N/A",
      capital: data.capital ? data.capital[0] : "N/A",
      tld: data.tld ? data.tld[0] : "N/A",
      currencies: data.currencies
        ? Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", ") + "."
        : "N/A",
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
            .then(([data]) => {
              return data.name.common;
            });
        })
      ).then((borderList) => {
        setCountryData((prevState) => {
          return {
            ...prevState,
            borders: [...prevState.borders, ...borderList],
          };
        });
      });
    }
  }

  useEffect(() => {
    if (state) {
      createCountryDetail(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        createCountryDetail(data);
      })
      .catch((err) => {
        <ErrorPage />;
      });
  }, [country]);

  return countryData.length === 0 ? (
    <CountrySkeleton />
  ) : (
    <section
      id="country-container"
      className={`${isDarkMode ? "dark-mode" : ""}`}
    >
      <div className="button-container">
        <span
          onClick={() => {
            history.back();
          }}
          id="back_btn"
        >
          {" "}
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </span>
      </div>
      <div className="country-details">
        <div className="image-container">
          <img className="countryImg" src={countryData.flag} />
        </div>
        <div className="country-info">
          <h2 id="countryName">{countryData.name}</h2>
          <div className="details_container">
            <div className="left-details">
              <p>
                Native Name:{" "}
                <span id="nativeName">{countryData.nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span id="population">{countryData.population}</span>
              </p>
              <p>
                Region: <span id="region">{countryData.region}</span>
              </p>
              <p>
                Sub Region: <span id="subRegion">{countryData.subRegion}</span>
              </p>
              <p>
                Capital: <span id="capital">{countryData.capital}</span>
              </p>
            </div>
            <div className="right-details">
              <p>
                Top Level Domain: <span id="domain">{countryData.tld}</span>
              </p>
              <p>
                Currencies:{" "}
                <span id="currencies">{countryData.currencies}</span>
              </p>
              <p>
                Languages: <span id="languages">{countryData.languages}</span>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p>Border Countries: </p>
            <div className="countries">
              {countryData.borders.map((border, i) => {
                return (
                  <Link to={`/${border}`} key={i}>
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
