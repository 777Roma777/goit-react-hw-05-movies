import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation, NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzFlODliOWRlZDYwOWIwM2Y2YjIzZWJhNzA2OGQ2ZCIsInN1YiI6IjY1MmZlYjkzMzU4ZGE3NWI1YzBkYjA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRGnslGWLfs6wcgCsRSPcC2CJHG3SzU9K7engGH1LDM';

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios(options);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
        }
        finally {
            setLoading(false); // Встановлюємо стан завантаження в "false" навіть у випадку помилки
          }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <NavLink to={backLink}>
        <button>← Go back</button>
      </NavLink>

      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h1>{movieDetails.title}</h1>
      <p>Vote avarage: {movieDetails.vote_average.toFixed(1)}</p>
      <p>Overiview: {movieDetails.overview}</p>
      <ul>
        <p>Genres:</p>
        {movieDetails.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
