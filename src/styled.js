import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  font-size: 20px;
  text-decoration: none;
  color: white;

  &.${activeClassName} {
    filter: brightness(80%);
  }
`;

export const Nav = styled.ul`
  background-color: teal;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;
export const NavItem = styled.li`
  list-style: none;
  padding: 20px;
`;
