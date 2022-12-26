import styled from "styled-components";
import SearchMovie from "./SearchMovie";

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: black;
  opacity: 90%;
  z-index: 1;
`;

const Logo = styled.h2`
  margin-left: 10px;

  color: #77c6ee;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>NETFLEX</Logo>
      <SearchMovie />
    </Wrapper>
  );
};

export default Navbar;
