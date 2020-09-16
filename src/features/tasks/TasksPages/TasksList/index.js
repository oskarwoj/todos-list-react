import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TaskList,
  Item,
  Content,
  Button,
  StyledLink,
  EditableContent,
  ContentInput,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toogleTaskDone,
  removeTask,
  selectHideDone,
  editTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../../searchQueryParamName";

const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const [editableId, setEditableId] = useState(0);
  const [newTaskName, setNewTaskName] = useState("");

  const dispatch = useDispatch();

  const onEditSave = (id, content) => {
    dispatch(
      editTask({
        content: newTaskName.trim() || content,
        id,
      })
    );

    setEditableId(undefined);
  };

  return (
    <TaskList>
      {tasks.map(({ id, content, done }) => (
        <Item key={id} hidden={done && hideDone}>
          <Button toogleDone onClick={() => dispatch(toogleTaskDone(id))}>
            {done ? "✔" : ""}
          </Button>
          {editableId === id ? (
            <EditableContent as="form">
              <ContentInput
                autoFocus
                value={newTaskName}
                onChange={({ target }) => setNewTaskName(target.value)}
              />
              <Button save onClick={() => onEditSave(id, content)}>
                Zapisz
              </Button>
            </EditableContent>
          ) : (
            <EditableContent>
              <Content done={done}>
                <StyledLink to={`/zadania/${id}`}>{content}</StyledLink>
              </Content>
              <Button
                edit
                onClick={() => setEditableId(id) || setNewTaskName(content)}
              >
              ✏
              </Button>
            </EditableContent>
          )}

          <Button remove onClick={() => dispatch(removeTask(id))}>
          🗑
          </Button>
        </Item>
      ))}
    </TaskList>
  );
};

export default TasksList;
