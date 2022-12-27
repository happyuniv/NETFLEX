import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MovieContents, { props } from './components/MovieContents/MovieContents';
import { useCallback, useEffect, useState } from 'react';
import api from './api';

export type MovieDataType = {
  id: number;
  title: string;
  overview: string;
  release_date: number;
  poster_path: string;
  backdrop_path: string;
};

export type category = 'popular' | 'top_rated' | 'upcoming';

const Container = styled.div``;

const App = () => {
  useEffect(() => {
    getMovieData(category);
  }, []);

  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [category, setCateogry] = useState<category>('popular');

  const getMovieData = async (category: category) => {
    const storedMovies = sessionStorage.getItem(category);
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies!));
      return;
    }
    const data = await api.fetchCategory(category);
    const movieData = data.results;
    setMovies(movieData);
    sessionStorage.setItem(category, JSON.stringify(movieData));
  };

  const selectCategory = useCallback((category: category) => {
    getMovieData(category);
    setCateogry(category);
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Sidebar selectCategory={selectCategory} />
        <MovieContents movies={movies} category={category} />
      </Container>
    </>
  );
};

export default App;
