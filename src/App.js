import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPages from "./features/tasks/TasksPages/index";
import TaskPages from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";

export default () => (
  <BrowserRouter basename="/todos-list-react">
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPages />
        </Route>
        <Route path="/zadania">
          <TasksPages />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
