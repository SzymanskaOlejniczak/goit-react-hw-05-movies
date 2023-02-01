import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '0d78144943c3507b0c4f9f0eca5bf958';

const fetchPopular = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

const fetchSearchByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};

const fetchMovieById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
  
  const api = {
    fetchPopular,
    fetchSearchByQuery,
    fetchMovieById,
    fetchActors,
    fetchReviews,
  };
  
  export default api;