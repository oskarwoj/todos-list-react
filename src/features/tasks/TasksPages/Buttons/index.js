import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "./styled";
import {
  toogleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
  const areTaskEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Container>
      {!areTaskEmpty > 0 && (
        <>
          <Button onClick={() => dispatch(toogleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  );
};
export default Buttons;
