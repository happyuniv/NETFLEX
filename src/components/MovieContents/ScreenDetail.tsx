import styled from 'styled-components';
import { MovieDataType } from '../../App';

type props = {
  screenMovie: MovieDataType;
};

const Container = styled.div`
  flex: 1;
  padding: 5rem;

  @media screen and (max-width: 800px) {
    order: 2;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
`;
const Year = styled.div`
  margin: 2rem 0;
  font-size: 1.6rem;
  opacity: 0.7;
`;
const OverView = styled.div`
  margin-top: 3rem;
  font-size: 1.6rem;
`;

const ScreenDetail = ({ screenMovie }: props) => {
  return (
    <>
      <Container>
        <Title>{screenMovie.title}</Title>
        <Year>{screenMovie.release_date.split('-')[0]}</Year>
        <OverView>{screenMovie.overview}</OverView>
      </Container>
    </>
  );
};

export default ScreenDetail;
