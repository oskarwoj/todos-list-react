import React from "react";
import { TasksList, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toogleTaskDone }) => {
  return (
    <TasksList>
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
    </TasksList>
  );
};

export default Tasks;
