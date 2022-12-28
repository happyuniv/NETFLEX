import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api';
import { category, MovieDataType } from '../../App';
import ScreenImage from '../../assets/screen.jpg';
import ScreenContents from './ScreenContents';
import ScreenDetail from './ScreenDetail';

type props = {
  movies: MovieDataType[];
};

const Container = styled.section`
  display: flex;
  min-height: 50vh;
  color: white;
  background-color: black;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Screen = styled.div`
  height: 50vh;
  color: white;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515);
  /* url(${ScreenImage}); */
  /* background-size: 100% 100%; */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
`;

const MovieScreen = ({ movies }: props) => {
  useEffect(() => {
    const randomMovie = movies[Math.round(Math.random() * movies.length)];
    setScreenMovie(randomMovie);
  }, []);

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
export default React.memo(MovieScreen);
