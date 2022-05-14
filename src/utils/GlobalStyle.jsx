import { createGlobalStyle, css } from "styled-components";

const ResetCSS = css`
  // colors
  :root {
  }
  // resets
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
`;

const BaseCSS = createGlobalStyle`
    ${ResetCSS}
`;

export const GlobalStyle = () => <BaseCSS />;
