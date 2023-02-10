import styled from "styled-components";

export const Button = styled.button`
  border-radius: ${({ theme: { element } }) => element.radius};
  margin: 10px 0;
  padding: 15px 20px;
  border: none;

  min-width: 100px;

  background: ${({ gradient, theme: { color } }) =>
    gradient
      ? `linear-gradient(to right, ${color.side}, ${color.sub})`
      : color.grey};

  color: ${({ theme: { color } }) => color.white};
  font-weight: 600;

  ${({ gradient }) =>
    gradient &&
    `
      animation: gradient 1s ease infinite;
      background-size: 200% 200%;
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
  `}
`;
