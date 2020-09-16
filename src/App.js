import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPages from "./features/tasks/TasksPages/index";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./common/themeSlice";
import TaskPages from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, Nav, NavItem } from "./styled";
import { GlobalStyle } from "./GlobalStyle";

export default () => {
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.normal}>
      <GlobalStyle />
      <HashRouter>
        <Nav>
          <NavItem>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/o-autorze">O autorze</StyledNavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPages />
          </Route>
          <Route path="/zadania">
            <TasksPages />
          </Route>
          <Route path="/o-autorze">
            <AuthorPage />
          </Route>
          <Route path="/">
            <Redirect to="/zadania" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};
