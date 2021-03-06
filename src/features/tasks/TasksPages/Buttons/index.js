import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "./styled";
import {
  toogleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  removeAllTasks,
  selectAreTasksUndone,
} from "../../tasksSlice";

const Buttons = () => {
  const areTaskEmpty = useSelector(selectAreTasksEmpty);
  const areTaskUndone = useSelector(selectAreTasksUndone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Container>
      {!areTaskEmpty > 0 && (
        <>
          <Button
            onClick={() => dispatch(toogleHideDone())}
            disabled={areTaskUndone}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
          <Button onClick={() => dispatch(removeAllTasks())}>
            Usuń wszystkie
          </Button>
        </>
      )}
    </Container>
  );
};
export default Buttons;
