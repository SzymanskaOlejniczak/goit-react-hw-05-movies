import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';
import EditorList from '../EditorList/EditorList';
import s from './MoviesPage.module.css'

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
  };

  useEffect(() => {
    if (queryMovie) {
      const onSearchMovie = async () => {
        setLoading(true);
        try {
          const searchMovie = await api.fetchSearchByQuery(queryMovie);
          setSearchFilms(searchMovie);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      onSearchMovie();
    }
  }, [queryMovie]);

  return (
    <main className={s.moviesPage}>
      <div className={s.mainContainer}>
        <form onSubmit={handleSubmit} className={s.searchForm}>
          <input type="text" name="query" autoFocus  className={s.searchForm__input} />
          <button type="submit" className={s.searchForm__button}>Search</button>
        </form>
        {loading && <Loader />}
        {searchFilms && <EditorList films={searchFilms} />}
      </div>
    </main>
  );
};

export default MoviesPage;