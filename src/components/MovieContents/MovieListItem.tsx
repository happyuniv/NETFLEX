import styled from 'styled-components';
import { MovieDataType } from '../../App';

type props = {
  movie: MovieDataType;
};

const Wrapper = styled.div`
  position: relative;
  max-width: 15rem;

  padding: 2rem;

  p {
    position: absolute;
    top: 10%;
  }
`;

const Poster = styled.img`
  box-shadow: 0px 0px 20px #000;
`;

const MovieListItem = ({ movie }: props) => (
  <Wrapper>
    <Poster src={movie.medium_cover_image} alt='' />
    <h6>{movie.year}</h6>
    <h5>{movie.title}</h5>
  </Wrapper>
);

export default MovieListItem;
