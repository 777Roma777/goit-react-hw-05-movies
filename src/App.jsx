import { Container, Header, Link } from 'components/app.styled';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from 'path/home';
import Movies from 'path/movies';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies"> Movies </Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};


