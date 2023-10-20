import { Container } from 'components/app.styled';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/loader';
import Layout from 'components/Layout/layout';
import Cast from 'components/Cast/cast';
import Reviews from 'components/Reviews/reviews';

const Home = lazy(() => import('path/home'));
const Movies = lazy(() => import('path/movies'));
const MovieDetails = lazy(() => import('path/movieDetails'));


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
                <Route path='cast' element={ <Cast/>} />
                <Route path='reviews' element={ <Reviews/>} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Suspense>
    </>
  );
};
