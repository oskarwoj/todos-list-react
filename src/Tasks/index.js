import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map(({ id, content, done }) => (
      <li
        key={id}
        className={`tasks__item${
          done && hideDoneTasks ? "tasks__item--hidden" : ""
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
        <button className="tasks__button tasks__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
