const Country = ({ country, onCountrySelect }) => {
  return (
    <li>
      {country.name.common}
      <button onClick={() => onCountrySelect(country)}>Show</button>
    </li>
  );
};

export default Country
