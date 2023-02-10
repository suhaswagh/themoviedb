import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  em,
  img,
  strong,
  form,
  table,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  section,
  footer,
  header,
  menu,
  nav {
    display: block;
  }

  input{
    box-sizing: border-box;
  }

  body {
    color: ${({ theme: { color } }) => color?.font};
    font-size: ${({ theme: { fontSize } }) => fontSize?.main};
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  button {
    cursor: pointer;
  }

`;
