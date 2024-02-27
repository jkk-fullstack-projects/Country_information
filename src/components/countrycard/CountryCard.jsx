import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryInformation from '../country/CountryInformation.jsx';
import '../../styles/CountryInformation.css'

const CountryCard = ({ country }) => {
  const [imageLink, setImageLink] = useState('');
  const [photographer, setPhotographer] = useState('');

  useEffect(() => {
    const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_APP_UNSPLASH_ACCESS_KEY;
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(country.capital)}&client_id=${UNSPLASH_ACCESS_KEY}`;
    
    axios.get(url)
      .then(response => {
        const photo = response.data;
        setImageLink(photo.urls.small);
        setPhotographer(`${photo.user.first_name} ${photo.user.last_name || ''}`);
      })
      .catch(error => console.error('Error fetching image from Unsplash:', error));
  }, [country.capital]);

  return (
    <div className="countryCardContainer">
      <CountryInformation country={country} imageLink={imageLink} photographer={photographer} />
    </div>
  );
};

export default CountryCard;
