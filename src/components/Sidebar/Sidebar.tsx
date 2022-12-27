import styled from 'styled-components';
import Popular from '../../assets/popular.svg';
import Latest from '../../assets/latest.svg';
import TopRate from '../../assets/top-rate.svg';
import React from 'react';
import { category } from '../../App';

type props = {
  selectCategory: (category: category) => void;
};
const Container = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 70px;
  padding-top: 20px;
  width: 80px;
  height: 100%;
  background-color: #3b4956;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    border: none;
    color: white;
    background-color: transparent;
    /* background-color: rgba(22, 2, 147, 0.508); */

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 30px;
  }

  p {
    margin-top: 5px;
    font-size: 13px;
  }
`;

const Sidebar = ({ selectCategory }: props) => {
  return (
    <>
      <Container>
        <button onClick={() => selectCategory('popular')}>
          <img src={Popular} alt='' />
          <p>Popular</p>
        </button>
        <button onClick={() => selectCategory('top_rated')}>
          <img src={TopRate} alt='' />
          <p>TopRate</p>
        </button>
        <button onClick={() => selectCategory('upcoming')}>
          <img src={Latest} alt='' />
          <p>Upcoming</p>
        </button>
      </Container>
    </>
  );
};

export default React.memo(Sidebar);
