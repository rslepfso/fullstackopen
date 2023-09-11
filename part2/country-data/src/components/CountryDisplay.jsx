import React from "react";
import Country from "./Country";
import CountryMenu from "./CountryMenu";

const CountryDisplay = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((c) => (
          <CountryMenu country={c} key={c.name.common} />
        ))}
      </ul>
    );
  }

  if (countries.length === 1) {
    return (
      <ul>
        <li key={countries[0].name.common}>
          <Country country={countries[0]} />
        </li>
      </ul>
    );
  }
};

export default CountryDisplay;
