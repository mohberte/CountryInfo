import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CityCard from './component/CountryCard';
import  StarsCanvas  from './component/canvas/Stars';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (searchInput) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchInput}`)
        .then((res) => {
          if (res.data.length > 0) {
            setCity(res.data[0]);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setCity(null);
        });
    }
  }, [searchInput]);

  const handleSearch = () => {
    setCity(null); // Clear the current city data
    if (searchInput) {
      // Only trigger search if there is an input
      setSearchInput(searchInput.trim()); // Remove any leading/trailing spaces
    }
  };

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a Country"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
  className="bg-gray-500 hover:bg-red-700 text-white font-bold  rounded ml-2"
  onClick={handleSearch}
>Search</button>
      </div>
      {city ? (
        <div className="mt-20 flex flex-col">
           <VerticalTimeline>
            <CityCard label="Common Name" value={city.name.common} />
            <CityCard label="Official Name" value={city.name.official} />
            <CityCard label="Capital" value={city.capital} />
            <CityCard label="Region" value={city.region} />
            <CityCard label="Area" value={city.area} />
            <CityCard label="Subregion" value={city.subregion} />
            <CityCard label="Languages" value={Object.values(city.languages).join(", ")} />
            <CityCard
              label="Currency"
              value={city.currencies[Object.keys(city.currencies)[0]].name}
            />
            <CityCard label="Borders" value={city.borders?.length > 0 ? city.borders.join(", ") : "No border information available"} />
           
          </VerticalTimeline>
        </div>
      ) : (
        <div></div>
      )}
      <StarsCanvas />
    </div>
    
  );
}

export default App;
