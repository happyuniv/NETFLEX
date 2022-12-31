import styled from 'styled-components';
import { IMAGE_BASE_URL } from '../../api';
import { MovieDataType } from '../../App';

type props = {
  movie: MovieDataType;
  setMovie: (movie: null) => void;
};

const Container = styled.article``;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000d5;
  z-index: 999;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  border: 0.1rem solid #808080d5;
  color: white;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: none;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #575757;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  @media screen and (max-width: 320px) {
    height: auto;
  }
`;

const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  color: black;
  font-size: 2rem;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const PosterWrapper = styled.div`
  flex: 1;
  display: flex;

  @media screen and (max-width: 90rem) {
    justify-content: center;
  }
`;
const Poster = styled.img`
  width: 30rem;
  height: 40rem;
  box-shadow: 0px 0px 20px #000;
  transform: translate(-10%, -10%);

  @media screen and (max-width: 90rem) {
    width: 50%;
    height: 30rem;
    transform: translate(0, 0);
  }
`;

const Detail = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
`;
const Title = styled.h3`
  font-size: 3rem;
`;
const Year = styled.div`
  margin: 2rem 0;
  font-size: 1.6rem;
  opacity: 0.7;
`;
const Overview = styled.div`
  margin-top: 3rem;
  font-size: 1.6rem;
`;

const MovieDetail = ({ movie, setMovie }: props) => {
  return (
    <>
      <Container>
        <Backdrop
          onClick={() => {
            setMovie(null);
          }}
        />
        <Modal>
          <Close
            onClick={() => {
              setMovie(null);
            }}
          >
            X
          </Close>
          <PosterWrapper>
            <Poster src={`${IMAGE_BASE_URL}/${movie.poster_path}`} />
          </PosterWrapper>
          <Detail>
            <Title>{movie.title}</Title>
            <Year>{`${movie.release_date.split('-')[0]}.${
              movie.release_date.split('-')[1]
            }`}</Year>
            <Overview>{movie.overview}</Overview>
          </Detail>
        </Modal>
      </Container>
    </>
  );
};

export default MovieDetail;
