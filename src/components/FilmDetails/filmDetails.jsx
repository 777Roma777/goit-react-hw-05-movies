import React, { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/loader';

const Cast = lazy(() => import('components/Cast/cast'));
const Reviews = lazy(() => import('components/Reviews/reviews'));

const MovieInfo  = ({ backLink, movieDetails }) => {
  return (
    <div>
      <Link to={backLink}>
        <button>← Go back</button>
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <h1>{movieDetails.title}</h1>
        <p>Vote average: {movieDetails.vote_average.toFixed(1)}</p>
        <p>Overview: {movieDetails.overview}</p>
        <ul>
          <p>Genres:</p>
          {movieDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <nav>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </nav>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieInfo ;
