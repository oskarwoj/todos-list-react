import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import useTasks from "./useTasks";

function App() {
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
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
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

export default App;
