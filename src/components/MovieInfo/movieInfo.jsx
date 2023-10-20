import React, { lazy, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './movieInfo.module.css'; // Import the CSS module

const Cast = lazy(() => import('components/Cast/cast'));
const Reviews = lazy(() => import('components/Reviews/reviews'));

const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  return (
    <div>
      <Link to={backLink.current}>
        <button className={css['button']}>Go back</button>
      </Link>
      <div className={css['main-info']}>
        <img
          className={css['image']}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className={css['movie-details']}>
          <h2 className={css['movie-title']}>{movie.title}</h2>
          <p className={css['movie-vote']}>
            Vote average: {movie.vote_average.toFixed(1)}
          </p>
          <p className={css['movie-overview']}>Overview: </p>
          <span>{movie.overview}</span>
          <ul className={css['genres-list']}>
            <p className={css['genres-genres']}>Genres:</p>
            {movie.genres.map(genre => (
              <li key={genre.id} className={css['genre-item']}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css['additional-info']}>
        <h3>Additional information:</h3>
        <ul className={css['additional-list']}>
          <li>
            <Link to="cast" className={css['cast-reviews-link']}>
              <Cast />
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css['cast-reviews-link']}>
              <Reviews />
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
