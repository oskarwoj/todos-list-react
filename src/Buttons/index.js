import React from "react";
import { Button, Container } from "./styled";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAlldone }) => (
  <Container>
    {tasks.length > 0 && (
      <>
        <Button onClick={toogleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button onClick={setAlldone} disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Container>
);

export default Buttons;
