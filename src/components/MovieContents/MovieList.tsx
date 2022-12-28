import styled from 'styled-components';
import { props } from './MovieContents';
import MovieListItem from './MovieListItem';

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Category = styled.h2`
  padding: 3rem;
  width: 100%;
  color: #77c6ee;
  font-size: 2.5rem;
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
