import React from "react";
import { AlertCircle } from "react-feather";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    height: 100px;
  }

  span {
    font-size: ${({ theme: { font } }) => font.big};
    font-weight: 800;
    margin: 20px;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <AlertCircle /> <span>Not Found / 404</span>
    </Container>
  );
};

export default NotFound;
