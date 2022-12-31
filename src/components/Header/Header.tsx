import styled from 'styled-components';
import Search from './Search';

type props = {
  searchMovie: (keyword: string) => void;
};

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 7rem;
  font-size: 1.6rem;
  background-color: black;
  z-index: 1;
`;

const Logo = styled.h1`
  margin-left: 1rem;
  color: #77c6ee;
  font-size: 2.5rem;
  cursor: pointer;
`;

const Header = ({ searchMovie }: props) => {
  return (
    <>
      <Container>
        <Logo
          onClick={() => {
            window.location.reload();
          }}
        >
          NETFLEX
        </Logo>
        <Search searchMovie={searchMovie} />
      </Container>
    </>
  );
};

export default Header;
