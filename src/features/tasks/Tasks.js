import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import useTasks from "../../useTasks";
import { GlobalStyle } from "../../GlobalStyle";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toogleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toogleTaskDone,
    setAlldone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toogleTaskDone={toogleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toogleHideDone={toogleHideDone}
            setAlldone={setAlldone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
