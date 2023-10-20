import Loader from 'components/Loader/loader';
import React, { useEffect, useState } from 'react';
import { ErrorMessage } from 'components/ErrorMessage/errorMessage';
import { fetchFilms } from 'services/api';
import { MoviesList } from 'components/MoviesList/moviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFilms();
        const filmsData = data.results;
        setTrendingMovies(filmsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false)
      }
    }
    fetchTopMovies();
  }, []); 

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <h1>Trending today</h1>
      {trendingMovies && <MoviesList movies={ trendingMovies} />}
   </div>
  );
};

export default Home;
