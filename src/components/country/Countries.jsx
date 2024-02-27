import CountryCard from '../countrycard/CountryCard.jsx';
import Country from './Country.jsx';

const Countries = ({ countries, onCountrySelect }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    return <CountryCard country={countries[0]} />;
  } else {
    return (
      <ul>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} onCountrySelect={onCountrySelect}/>
        ))}
      </ul>
    );
  }
};

export default Countries;
