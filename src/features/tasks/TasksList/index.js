import React from "react";
import { TaskList, Item, Content, Button } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toogleTaskDone }) => {
  return (
    <TaskList>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toogleDone onClick={() => toogleTaskDone(id)}>
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
