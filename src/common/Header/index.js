import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectDarkTheme } from "../themeSlice";
import { StyledHeader, Button } from "./styled";

const Header = ({ title }) => {
  const isDarkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Button onClick={() => dispatch(toggleTheme())}>
        {isDarkTheme ? "Jasny motyw" : "Ciemny motyw"}
      </Button>
    </StyledHeader>
  );
};

export default Header;
