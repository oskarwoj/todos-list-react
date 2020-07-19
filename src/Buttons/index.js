import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAlldone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toogleHideDone} className="buttons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          onClick={setAlldone}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
