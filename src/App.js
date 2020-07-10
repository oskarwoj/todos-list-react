import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "prejść na Reacta", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <header>
        <h1>Lista zadań</h1>
      </header>

      <section className="section">
        <h2 className="section__header section__header--padding">
          Dodaj nowe zadanie
        </h2>
        <div className="section__body">
          <Form />
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header">Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
        <div className="section__body">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
