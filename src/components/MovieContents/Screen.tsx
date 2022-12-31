import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api';
import { MovieDataType } from '../../App';
import ScreenContents from './ScreenContents';
import ScreenDetail from './ScreenDetail';

const Container = styled.section`
  display: flex;
  min-height: 50vh;
  color: white;
  background-color: black;

  @media screen and (max-width: 80rem) {
    flex-wrap: wrap;
  }
`;

const Screen = () => {
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await api.fetchCategory('popular');
        const movieData = data.results;
        const randomMovie =
          movieData[Math.round(Math.random() * movieData.length)];
        setMovies(movieData);
        setScreenMovie(randomMovie);
        sessionStorage.setItem('popular', JSON.stringify(movieData));
      } catch (e) {
        console.log(e);
      }
    };
    getMovieData();
  }, []);

  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [screenMovie, setScreenMovie] = useState<MovieDataType>();

  return (
    <>
      <Container>
        {screenMovie && (
          <>
            <ScreenDetail screenMovie={screenMovie} />
            <ScreenContents
              movies={movies}
              screenMovie={screenMovie}
              setScreenMovie={setScreenMovie}
            />
          </>
        )}
      </Container>
    </>
  );
};
export default React.memo(Screen);
