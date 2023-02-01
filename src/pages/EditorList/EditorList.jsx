import { Link, useLocation } from 'react-router-dom';
import s from './EditorList.module.css'
import PropTypes from 'prop-types';

const EditorList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.moviesList}>
      {movies &&
        movies.map(movie => (
          <li className={s.moviesList__item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

EditorList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;