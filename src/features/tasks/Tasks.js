import React from "react";
import Form from "./Form";
import TaskList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { GlobalStyle } from "../../GlobalStyle";

function Tasks() {
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

export default Tasks;
