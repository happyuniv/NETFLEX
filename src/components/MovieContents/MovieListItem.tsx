import styled, { keyframes } from 'styled-components';
import { IMAGE_BASE_URL } from '../../api';
import { MovieDataType } from '../../App';

type props = {
  movie: MovieDataType;
  setMovie: (movie: MovieDataType) => void;
};

const Container = styled.article`
  padding: 2rem;
  width: 30rem;
  height: auto;
  color: white;
  font-size: 2rem;
`;

const bounce = keyframes`
  to {
    transform: translateY(-2rem);
  }
`;
const Poster = styled.img`
  width: 100%;
  height: 40rem;
  box-shadow: 0px 0px 20px #000;
  cursor: pointer;

  &:hover {
    animation: ${bounce} 0.5s forwards;
  }
`;

const Date = styled.p`
  opacity: 0.7;
`;
const Title = styled.p`
  margin-top: 0.5rem;
  font-size: 1.4rem;
`;

const MovieListItem = ({ movie, setMovie }: props) => (
  <>
    <Container>
      <Poster
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        onClick={() => {
          setMovie(movie);
        }}
      />
      <Date>{movie.release_date.split('-')[0]}</Date>
      <Title>{movie.title}</Title>
    </Container>
  </>
);
export default MovieListItem;
