import styled from 'styled-components';
import { MovieDataType } from '../../App';

type props = {
  movie: MovieDataType;
};

const Container = styled.article`
  position: relative;
  padding: 2rem;
  width: 20rem;
  height: 30rem;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 20px #000;
`;

const Date = styled.p``;
const Title = styled.p``;

const MovieListItem = ({ movie }: props) => (
  <>
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <Date>{movie.release_date}</Date>
      <Title>{movie.title}</Title>
    </Container>
  </>
);

export default MovieListItem;
