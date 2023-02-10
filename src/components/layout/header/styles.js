import styled from "styled-components";

export const Container = styled.header`
  padding: 1em 0;
  background-color: ${({ theme: { color } }) => color.main};
  color: ${({ theme: { color } }) => color.white};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  box-shadow: 0 0 10px ${({ theme: { color } }) => `${color.dark}40`};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 60px;
`;

export const LogoContainer = styled.div`
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoIconHolder = styled.div`
  margin-right: 10px;

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const LogoTextHolder = styled.h1`
  font-size: 30px;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
  background-image: ${({ theme: { color } }) =>
    `linear-gradient(60deg, ${color.side}, ${color.sub})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ActionCOntainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  svg {
    width: 20px;
    height: 100%;
  }
`;

export const LangHolder = styled.div`
  margin-right: 20px;
  position: relative;
`;

export const LangWrapper = styled.div`
  border: 1px solid ${({ theme: { color } }) => color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme: { color } }) => color.side};
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 140%;
  right: 0;
  width: fit-content;
  border: 2px solid ${({ theme: { color } }) => color.side};
  background-color: ${({ theme: { color } }) => color.main};
`;

export const ItemHolder = styled.div`
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${({ active, theme: { color } }) =>
    active ? color.side : "transparent"};

  &:hover {
    background-color: ${({ theme: { color } }) => color.side};
    color: ${({ theme: { color } }) => color.main};
  }
`;

export const TextHolder = styled.span`
  font-weight: bold;
  text-transform: ${({ upper }) => (upper ? "uppercase" : "none")};
`;
