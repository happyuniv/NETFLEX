import styled from 'styled-components';
import { MovieDataType } from '../../App';

type props = {
  movie: MovieDataType;
};

const Container = styled.article`
  padding: 2rem;
  width: 30rem;
  height: auto;
  color: white;
  font-size: 2rem;
`;

const Poster = styled.img`
  width: 100%;
  height: 40rem;
  box-shadow: 0px 0px 20px #000;
`;

const Date = styled.p`
  opacity: 0.7;
`;
const Title = styled.p`
  margin-top: 0.5rem;
  font-size: 1.4rem;
`;

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
