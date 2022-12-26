import styled from 'styled-components';
import { props } from './MovieContents';
import MovieListItem from './MovieListItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  color: white;

  h1 {
    width: 100%;
    color: #77c6ee;
  }
`;

const categoryMatch = {
  download_count: 'Poplular',
  rating: 'Top Rate',
  year: 'Latest',
};

const MovieList = ({ movies, category }: props) => {
  return (
    <Wrapper>
      <h1>{categoryMatch[category]}</h1>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </Wrapper>
  );
};

export default MovieList;
