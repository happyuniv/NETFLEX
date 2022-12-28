import styled from 'styled-components';
import Search from './Search';

const Container = styled.header`
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
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
`;

const Header = () => {
  return (
    <>
      <Container>
        <Logo>NETFLEX</Logo>
        <Search />
      </Container>
    </>
  );
};

export default Header;
