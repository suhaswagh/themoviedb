import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  border-radius: ${({ theme: { element } }) => element.radius};
  background-color: ${({ theme: { color } }) => color.white};

  border-width: 2px;
  border-style: solid;
  border-color: ${({ error, valid, theme: { color } }) =>
    error ? color.orange : valid ? color.side : color.sub};

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputHolder = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 0;

  caret-color: ${({ theme: { color } }) => color.main};

  &:focus {
    outline: none;
  }
`;

export const IconHolder = styled.div`
  margin-right: 8px;
  cursor: pointer;

  svg {
    color: ${({ theme: { color } }) => color.main};
    width: 18px;
    height: 18px;
  }
`;
export const ErrorHolder = styled.span`
  color: ${({ theme: { color } }) => color.orange};
  margin: 7px 0;
  display: block;
`;
