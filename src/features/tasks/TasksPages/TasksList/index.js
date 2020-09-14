import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TaskList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toogleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <TaskList>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toogleDone onClick={() => dispatch(toogleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          <Content done={done}>
            <Link to={`/zadania/${id}`}>{content}</Link>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(id))}>
            🗑
          </Button>
        </Item>
      ))}
    </TaskList>
  );
};

export default TasksList;
