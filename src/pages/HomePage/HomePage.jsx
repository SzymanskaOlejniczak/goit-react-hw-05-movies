import React, { useEffect, useState } from 'react';
import EditorList from '../EditorList/EditorList';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';
import s from './HomePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchTrendingFilms = async () => {
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
    FetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1 className='s.h1'>Trending today</h1>
      {films && <EditorList films={films} />}
      {loading && <Loader />}
    </main>
  );
};

export default HomePage;