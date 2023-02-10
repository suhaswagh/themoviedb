import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-inline: auto;

  width: 350px;

  background-color: ${({ theme: { color } }) => color.main};
  color: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme: { element } }) => element.radius};

  padding: 20px;
`;

export const TextHolder = styled.span`
  display: block;
  font-size: ${({ theme: { font }, heading, sub }) =>
    heading ? font.big : sub ? font.sub : font.main};

  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  margin-bottom: 10px;
`;

export const FormHolder = styled.form`
  margin: 40px 0 10px;
`;
