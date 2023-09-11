import { useState, useEffect } from "react";
import axios from "axios";
import CountryDisplay from "./components/CountryDisplay";

const App = () => {
  const [countryQuery, setCountryQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (countryQuery) {
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((response) => {
          const apiList = response.data.filter((c) =>
            c.name.common.toLowerCase().includes(countryQuery.toLowerCase())
          );
          setCountries(apiList);
        });
    }
  }, [countryQuery]);

  const handleCountryChange = (e) => {
    setCountryQuery(e.target.value);
  };

  return (
    <div>
      <input value={countryQuery} onChange={handleCountryChange} />
      <CountryDisplay countries={countries} />
    </div>
  );
};

export default App;
