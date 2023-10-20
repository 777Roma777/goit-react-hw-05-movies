import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'services/api';
import Loader from 'components/Loader/loader';
import { ErrorMessage } from 'components/ErrorMessage/errorMessage';
import css from './cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState([]);

  const defaultImg =
    'https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg';

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movieCast &&
        movieCast.map(({ id, name, character, profile_path }) => (
          <ul  key={id}  className={css['cast-list']}>
            <li className={css['cast-item']}>
           
              <img 
                className={css['cast-img']}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt="poster"
              />
              <p className={css['cast-name']}>Name: {name}</p>
              <p className={css['cast-character']}>Character: {character}</p>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Cast;
