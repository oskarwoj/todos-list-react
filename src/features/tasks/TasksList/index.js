import React from "react";
import { TaskList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toogleTaskDone,
  removeTask,
  selectHideDone,
} from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);


  const dispatch = useDispatch();

  return (
    <TaskList>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toogleDone onClick={() => dispatch(toogleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          <Content done={done}>{content}</Content>
          <Button remove onClick={() => dispatch(removeTask(id))}>
            🗑
          </Button>
        </Item>
      ))}
    </TaskList>
  );
};

export default TasksList;
