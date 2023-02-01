import React, { useEffect, useState } from 'react';
import EditorList from '../EditorList/EditorList';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';
import s from './Page.module.css';


const Page = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchTrendingMovie = async () => {
      setLoading(true);
      try {
        const trendingFilms = await api.fetchPopular();
        setFilms(trendingFilms);
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
      {films && <EditorList films={films} />}
      {loading && <Loader />}
    </main>
  );
};

export default Page;