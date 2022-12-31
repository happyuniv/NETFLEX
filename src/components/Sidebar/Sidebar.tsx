import styled from 'styled-components';
import Popular from '../../assets/popular.svg';
import Upcoming from '../../assets/upcoming.svg';
import TopRate from '../../assets/top-rate.svg';
import React from 'react';
import { category } from '../../App';

type props = {
  selectCategory: (category: category) => void;
};
const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 8rem;
  height: 100%;
  background-color: #3b4956;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
  border: none;
  color: white;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: #80808085;
  }
`;

const ButtonImage = styled.img`
  width: 3rem;
`;

const Title = styled.span`
  margin-top: 1rem;
  font-size: 1.3rem;
`;

const Sidebar = ({ selectCategory }: props) => {
  return (
    <>
      <Container>
        <Button onClick={() => selectCategory('popular')}>
          <ButtonImage src={Popular} />
          <Title>Popular</Title>
        </Button>
        <Button onClick={() => selectCategory('top_rated')}>
          <ButtonImage src={TopRate} />
          <Title>TopRate</Title>
        </Button>
        <Button onClick={() => selectCategory('upcoming')}>
          <ButtonImage src={Upcoming} />
          <Title>Upcoming</Title>
        </Button>
      </Container>
    </>
  );
};

export default React.memo(Sidebar);
