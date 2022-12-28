import styled from 'styled-components';
import { category, MovieDataType } from '../../App';
import MovieList from './MovieList';
import MovieScreen from './MovieScreen';

export type props = {
  movies: MovieDataType[];
  category: category;
};

const Container = styled.main`
  margin-top: 7rem;
  margin-left: 8rem;
  background-color: #242a30;
`;
const MovieContents = ({ movies, category }: props) => (
  <>
    <Container>
      <MovieScreen movies={movies} />
      <MovieList movies={movies} category={category} />
    </Container>
  </>
);

export default MovieContents;
