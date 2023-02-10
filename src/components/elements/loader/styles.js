import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme: { color } }) => color.main};
  border-radius: 50%;
  border-top-color: ${({ theme: { color } }) => color.sub};;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
