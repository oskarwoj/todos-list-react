import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map(({ id, content, done }) => (
      <li
        key={id}
        className={`tasks__item ${
          done && hideDone ? "tasks__item--hidden" : ""
        }`}
      >
        <button className="tasks__button tasks__button--toogleDone">
          {done ? "✔" : ""}
        </button>
        <span
          className={`tasks__content ${done ? "tasks__content--done" : ""}`}
        >
          {content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
