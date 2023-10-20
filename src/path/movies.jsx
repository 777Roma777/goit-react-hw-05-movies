import React, { useEffect, useState } from 'react';
import { fetchMovie } from 'services/api';
import Loader from 'components/Loader/loader';
import { ErrorMessage } from 'components/ErrorMessage/errorMessage';
import { MoviesList } from 'components/MoviesList/moviesList';
import SearchBar from 'components/SearchBar/searchBar';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchMovieSearch = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovie(query);
        setSearchedMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieSearch();
  }, [query]);

  const onSubmit = evt => {
    evt.preventDefault();
    const searchWord = evt.currentTarget.searchInput.value.trim();
    if (!searchWord) {
      return alert('Please, enter your keyword!');
    }
    setSearchParams({ query: searchWord });

    evt.currentTarget.reset();
  };

  return (
    <div>
      <SearchBar handleSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {searchedMovies && <MoviesList movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
