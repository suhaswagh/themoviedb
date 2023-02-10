import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme: { color } }) => color.main};
  background-image: none;
  color: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme: { element } }) => element.radius};
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px ${({ theme: { color } }) => `${color.main}40`};
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    background-image: ${({ theme: { color } }) =>
      `linear-gradient(60deg, ${color.side}, ${color.sub})`};
    box-shadow: 0 0 10px 5px ${({ theme: { color } }) => `${color.side}99`};
    color: ${({ theme: { color } }) => color.main};
  }
`;

export const ImageContainer = styled.div`
  border-radius: ${({ theme: { element } }) => element.radius};
  overflow: hidden;
`;

export const ImageHolder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  margin: 20px 0 0;
`;

export const TextHolder = styled.h3`
  font-size: ${({ theme: { font } }) => font.big};
`;
