import React from "react";
import styled from "styled-components";
import ScreenImage from "../../assets/screen.jpg";

const Wrapper = styled.article``;

const Screen = styled.div`
  height: 50vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515),
    url(${ScreenImage});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  p {
  }
`;

const MovieScreen = () => (
  <Wrapper>
    <Screen>
      <p></p>
    </Screen>
  </Wrapper>
);

export default React.memo(MovieScreen);
