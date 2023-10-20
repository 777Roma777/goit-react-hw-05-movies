import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {trendingMovies.map(({ id, title }) =>
        title ? (
          <li key={id}>
            <Link key={id} state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default MovieList;
