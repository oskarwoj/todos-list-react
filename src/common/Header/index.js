import React from "react";
import { StyledHeader } from "./styled";

const Header = ({ title }) => (
  <StyledHeader>
    <h1>{title}</h1>
  </StyledHeader>
);

export default Header;
