import { Container } from 'components/app.styled';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/loader';
import Layout from 'components/Layout/layout';

const Home = lazy(() => import('path/home'));
const Movies = lazy(() => import('path/movies'));
const MovieDetails = lazy(() => import('path/movieDetails'));
const Cast = lazy(() => import('components/Cast/cast'));
const Reviews = lazy(() => import('components/Reviews/reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId/" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Suspense>
    </>
  );
};
