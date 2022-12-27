import { category } from './App';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const respond = (res: Response) => {
  if (res.status === 200) return res.json();
};

const api = {
  fetchCategory: async (category: category) => {
    const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
    return respond(res);
  },
  fetchMovieDetail: async (id: number) => {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    return respond(res);
  },
};

export default api;
