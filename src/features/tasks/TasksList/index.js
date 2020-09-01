import React from "react";
import { TaskList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toogleTaskDone } from "../tasksSlice";

const TasksList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <TaskList>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toogleDone onClick={() => dispatch(toogleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          <Content done={done}>{content}</Content>
          <Button remove onClick={() => removeTask(id)}>
            🗑
          </Button>
        </Item>
      ))}
    </TaskList>
  );
};

export default TasksList;
