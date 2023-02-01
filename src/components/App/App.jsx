import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
//import s from './App.module.css';
import Navigation from '../Navigation/Navigation';

const Page = lazy(() => import('../../pages/Page/Page'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};