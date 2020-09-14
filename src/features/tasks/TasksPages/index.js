import React from "react";
import Form from "../TasksPages/Form";
import TaskList from "./TasksList";
import Buttons from "../TasksPages/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { GlobalStyle } from "../../../GlobalStyle";

function TasksPages() {
  return (
    <Container>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPages;
