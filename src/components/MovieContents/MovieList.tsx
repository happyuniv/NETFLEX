import styled from 'styled-components';
import { props } from './MovieContents';
import MovieListItem from './MovieListItem';

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  color: white;
`;

const Category = styled.h1`
  width: 100%;
  color: #77c6ee;
`;

const categoryMatch = {
  popular: 'Poplular',
  top_rated: 'Top Rate',
  upcoming: 'Upcoming',
};

const MovieList = ({ movies, category }: props) => {
  return (
    <>
      <Container>
        <Category>{categoryMatch[category]}</Category>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </Container>
    </>
  );
};

export default MovieList;
