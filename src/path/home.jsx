import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFlODliOWRlZDYwOWIwM2Y2YjIzZWJhNzA2OGQ2ZCIsInN1YiI6IjY1MmZlYjkzMzU4ZGE3NWI1YzBkYjA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRGnslGWLfs6wcgCsRSPcC2CJHG3SzU9K7engGH1LDM';

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios(options);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Trending Movies Today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          movie.title ? (
            <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default Home;
