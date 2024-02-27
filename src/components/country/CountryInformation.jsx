import Weather from "../weather/Weather";

function CountryInformation({ country, imageLink, photographer }) {
  return (
    <div className="countryCard">
      <img src={imageLink} className="countryCard-img-top" alt={`${country.name.common} Flag`} />
      <div className="countryCard-body">
        <h5>{country.name.common}</h5>
        <p>Population: {country.population}</p>
        <p>Capital: {country.capital}</p>
        <p className="creditInfo">Photographer: {photographer}</p>
        <p className="creditInfo">Photo source: www.unsplash.com</p>
        <Weather city={country.capital} />
      </div>
    </div>
  );
}

export default CountryInformation;
