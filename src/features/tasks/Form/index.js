import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const inputRef = useRef(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      dispatch(
        addTask({
          content: newTaskContent.trim(),
          done: false,
          id: nanoid(),
        })
      );

      setNewTaskContent("");
      focusInput();
    }
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
