import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;

}

*, ::before, ::after {
  box-sizing: inherit;
}

:focus {
  outline: 2px solid ${({ theme }) => theme.outline};
}

body {
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

}
`;
