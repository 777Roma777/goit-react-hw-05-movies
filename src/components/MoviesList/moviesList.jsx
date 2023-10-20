import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const getMovies = Array.isArray(movies) && movies.length;
  const location = useLocation();
  return (
    <ul>
      {getMovies &&
        movies.map(({ id, title, poster_path }) => (
          <li className="movie-item" key={id}>
            <Link className="movie-link" state={{ from: location }} to={`/movies/${id}`}>
              {/* <img className="movie-img"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              /> */}
              <p className="title">{title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};