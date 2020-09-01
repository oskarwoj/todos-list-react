import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "./styled";
import { selectTasks, toogleHideDone } from "../tasksSlice";

const Buttons = ({ setAlldone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Container>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toogleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={setAlldone}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  );
};
export default Buttons;
