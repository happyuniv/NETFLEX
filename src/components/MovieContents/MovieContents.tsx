import styled from 'styled-components';
import { category, MovieDataType } from '../../App';
import MovieList from './MovieList';
import MovieScreen from './MovieScreen';

export type props = {
  movies: MovieDataType[];
  category: category;
};

const Container = styled.main`
  /* min-height: 100vh; */
  margin-top: 70px;
  margin-left: 80px;
  background-color: #242a30;
`;
const MovieContents = ({ movies, category }: props) => (
  <>
    <Container>
      <MovieScreen />
      <MovieList movies={movies} category={category} />
    </Container>
  </>
);

export default MovieContents;
