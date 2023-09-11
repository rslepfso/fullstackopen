import React, { useState } from "react";
import Country from "./Country";

const CountryMenu = ({ country }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div>
      {country.name.common}
      <button onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? "Hide" : "Show"}
      </button>
      {isShowing ? <Country country={country} /> : null}
    </div>
  );
};

export default CountryMenu;
