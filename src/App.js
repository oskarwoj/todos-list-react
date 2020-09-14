import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksPages from "./features/tasks/TasksPages/index";
import TaskPages from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

export default () => (
  <BrowserRouter basename="/todos-list-react">
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/author">O autorze</Link>
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
