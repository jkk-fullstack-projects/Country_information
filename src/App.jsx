import { useState, useEffect } from 'react';
import './styles/App.css';
import CountryCard from'./components/countrycard/CountryCard.jsx'
import Countries from './components/country/Countries.jsx';
import Filter from './components/filters/Filter.jsx';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const handleCountrySelect = (countryName) => {q
    const country = countries.find(c => c.name.common === countryName);
    setSelectedCountry(country);
  };
  
  return (
    <div className="App">
      <div className="container">
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        {selectedCountry ? (
        <CountryCard country={selectedCountry} />
        ) : (
        <Countries countries={filteredCountries} onCountrySelect={handleCountrySelect} />
      )}
      </div>
    </div>
  );
}

export default App;
