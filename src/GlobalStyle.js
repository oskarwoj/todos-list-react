import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;

}

*, ::before, ::after {
  box-sizing: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

}
`;
