import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFlODliOWRlZDYwOWIwM2Y2YjIzZWJhNzA2OGQ2ZCIsInN1YiI6IjY1MmZlYjkzMzU4ZGE3NWI1YzBkYjA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRGnslGWLfs6wcgCsRSPcC2CJHG3SzU9K7engGH1LDM';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/movie',
          params: {
            query: searchTerm,
            include_adult: 'false',
            language: 'en-US',
            page: '1',
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        const response = await axios(options);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
