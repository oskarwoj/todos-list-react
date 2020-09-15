import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPages from "./features/tasks/TasksPages/index";
import TaskPages from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, Nav, NavItem } from "./styled";

export default () => (
  <BrowserRouter basename="/todos-list-react">
    <nav>
      <nav>
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
      </nav>
    </nav>
  </BrowserRouter>
);
