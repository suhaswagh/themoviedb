import styled from "styled-components";

export const Container = styled.section`
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px 50px;
  grid-template-columns: repeat(2, 1fr);

  max-width: 65%;
  margin-inline: auto;

  ${({ theme: { media } }) =>
    `${media.mobile_down}{
        grid-template-columns: 1fr;
        max-width: 100%;
    }`};

  ${({ theme: { media } }) =>
    `${media.desktop_down}{
        max-width: 100%;
    }`};
`;

export const TitleWrapper = styled.div`
  margin: 30px 0 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const TitleHolder = styled.h2`
  font-weight: bold;
  font-size: 35px;
  text-transform: uppercase;
  background-image: ${({ theme: { color } }) =>
    `linear-gradient(60deg, ${color.side}, ${color.sub})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 10px;
    background-image: ${({ theme: { color } }) =>
      `linear-gradient(60deg, ${color.side}, ${color.main})`};
    position: absolute;
    left: 0;
    top: 90%;
  }
`;
