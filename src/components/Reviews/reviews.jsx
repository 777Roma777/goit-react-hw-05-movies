import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import Loader from 'components/Loader/loader';
import { ErrorMessage } from 'components/ErrorMessage/errorMessage';
import css from './reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchReviews(movieId);
        setMovieReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movieReviews.length ? (
        movieReviews.map(({ id, author, content }) => (
          <ul key={id} className={css['reviews-list']}>
            <li>
              <p className={css['reviews-author']}>Author: {author}</p>
              <p className={css['reviews-content']}>{content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>We don't have any reviews for this movie =(</p>
      )}
    </>
  );
};

export default Reviews;
