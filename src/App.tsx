import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MovieContents, { props } from './components/MovieContents/MovieContents';
import { useCallback, useEffect, useState } from 'react';

export type MovieDataType = {
  id: number;
  title: string;
  year: number;
  rating: number;
  medium_cover_image: string;
};

export type category = 'download_count' | 'rating' | 'year';
const Wrapper = styled.main`
  /* width: 100%;
  height: 100%; */
`;

const App = () => {
  console.log('renderd!');
  useEffect(() => {
    getMovieData('download_count');
  }, []);
  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [category, setCateogry] = useState<category>('download_count');

  const getMovieData = async (category: string) => {
    const storedMovies = sessionStorage.getItem(category);
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies!));
      return;
    }
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${category}`
    );
    const result = await res.json();
    const movieData = result.data.movies;
    setMovies(movieData);
    sessionStorage.setItem(category, JSON.stringify(movieData));
  };

  const selectCategory = useCallback((category: category) => {
    getMovieData(category);
    setCateogry(category);
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Sidebar selectCategory={selectCategory} />
      <MovieContents movies={movies} category={category} />
    </Wrapper>
  );
};

export default App;
