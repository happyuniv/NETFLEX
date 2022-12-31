import { useState } from 'react';
import styled from 'styled-components';
import { MovieDataType } from '../../App';
import { props } from './MovieContents';
import MovieDetail from './MovieDetail';
import MovieListItem from './MovieListItem';

const Container = styled.section`
  min-height: 100vh;
`;

const Category = styled.h2`
  padding: 3rem;
  width: 100%;
  color: #77c6ee;
  font-size: 2.5rem;
`;

const Keyword = styled(Category)``;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const EmptyResult = styled.div`
  color: white;
  font-size: 2.5rem;
`;

const categoryMatch = {
  popular: 'Poplular',
  top_rated: 'Top Rate',
  upcoming: 'Upcoming',
};

const MovieList = ({ movies, category, keyword }: props) => {
  const [movie, setMovie] = useState<null | MovieDataType>(null);

  return (
    <>
      <Container>
        {category && <Category>{categoryMatch[category]}</Category>}
        {keyword && <Keyword>{`Search results for "${keyword}"`}</Keyword>}
        {movies.length ? (
          <MovieListContainer>
            {movies.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} setMovie={setMovie} />
            ))}
          </MovieListContainer>
        ) : (
          <EmptyResult>Search result not found</EmptyResult>
        )}
        {movie && <MovieDetail movie={movie} setMovie={setMovie} />}
      </Container>
    </>
  );
};

export default MovieList;
