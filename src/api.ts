import { category } from './App';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const respond = (res: Response) => {
  if (res.status === 200) return res.json();
};

const api = {
  fetchCategory: async (category: category) => {
    const res = await fetch(
      `${API_BASE_URL}/movie/${category}?api_key=${API_KEY}`
    );
    return respond(res);
  },
  fetchMovieDetail: async (id: number) => {
    const res = await fetch(
      `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    return respond(res);
  },
  fetchMovieVideo: async (id: number) => {
    const res = await fetch(
      `${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    return respond(res);
  },
  fetchMovieSearch: async (keyword: string) => {
    const res = await fetch(
      `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`
    );
    return respond(res);
  },
};

export { IMAGE_BASE_URL };
export default api;
