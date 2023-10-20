import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetails } from 'services/api';
import { ErrorMessage } from 'components/ErrorMessage/errorMessage';
import Loader from 'components/Loader/loader';
import MovieInfo from 'components/MovieInfo/movieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const details = await fetchDetails(movieId);
        setFilmDetails(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  },[movieId])

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {filmDetails && <MovieInfo movie={ filmDetails} />}
    </div>
  );
};

export default MovieDetails;
