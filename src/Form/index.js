import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button onClick={focusInput} className="form__button">
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;
