import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './Card';

const country_api = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCountries = async () => {
    try{
      const response = await fetch(country_api);
      const data = await response.json();
      setCountries(data);
    }
    catch(error)
    {
      console.error("Error fetching countries:", error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country => 
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="search_bar">
        <input type="text" placeholder="Search for a country..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className='app_div'>
        {filteredCountries.map(({common, png}) => (
          <Card key={common} common={common} png={png} />
        ))}
      </div>
    </>
  );
}

export default App;