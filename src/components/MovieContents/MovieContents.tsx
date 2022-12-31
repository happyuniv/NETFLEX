import styled from 'styled-components';
import { category, MovieDataType } from '../../App';
import MovieList from './MovieList';
import Screen from './Screen';

export type props = {
  movies: MovieDataType[];
  category?: category;
  keyword?: string;
};

const Container = styled.main`
  margin-top: 7rem;
  margin-left: 8rem;
  background-color: #242a30;
`;
const MovieContents = ({ movies, category, keyword }: props) => (
  <>
    <Container>
      {!keyword && <Screen />}
      <MovieList movies={movies} category={category} keyword={keyword} />
    </Container>
  </>
);

export default MovieContents;
