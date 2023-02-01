import React, { useEffect, useState } from 'react';
import EditorList from '../EditorList/EditorList';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';
import s from './Page.module.css';


const Page = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchTrendingMovie = async () => {
      setLoading(true);
      try {
        const trendingMovies = await api.fetchPopular();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchTrendingMovie();
  }, []);

  return (
    <main>
      <h1 className={s.title}>Trending today</h1>
      {movies && <EditorList movies={movies} />}
      {loading && <Loader />}
    </main>
  );
};

export default Page;