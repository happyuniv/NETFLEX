import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MovieContents from './components/MovieContents/MovieContents';
import { useCallback, useEffect, useState } from 'react';
import api from './api';

export type MovieDataType = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
};

export type category = 'popular' | 'top_rated' | 'upcoming';

const Container = styled.div`
  min-width: 40rem;
`;

const App = () => {
  useEffect(() => {
    getMovieData(category);
  }, []);

  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [category, setCateogry] = useState<category>('popular');
  const [keyword, setKeyword] = useState('');

  const getMovieData = async (category: category) => {
    try {
      const data = await api.fetchCategory(category);
      const movieData = data.results;
      setMovies(movieData);
      sessionStorage.setItem(category, JSON.stringify(movieData));
    } catch (e) {
      console.log(e);
    }
  };

  const selectCategory = useCallback((category: category) => {
    const storedMovies = sessionStorage.getItem(category);
    if (storedMovies) setMovies(JSON.parse(storedMovies!));
    else getMovieData(category);
    setCateogry(category);
    setKeyword('');
  }, []);

  const searchMovie = async (keyword: string) => {
    try {
      const data = await api.fetchMovieSearch(keyword);
      const movieData = data.results;
      setKeyword(keyword);
      setMovies(movieData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <Header searchMovie={searchMovie} />
        <Sidebar selectCategory={selectCategory} />
        {keyword ? (
          <MovieContents movies={movies} keyword={keyword} />
        ) : (
          <MovieContents movies={movies} category={category} />
        )}
      </Container>
    </>
  );
};

export default App;
