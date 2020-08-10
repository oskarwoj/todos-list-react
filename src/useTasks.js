import { useState, useEffect } from "react";

const getInitialTasks = () => {
  const tasksFromLocaleStorage = localStorage.getItem("tasks");

  return tasksFromLocaleStorage ? JSON.parse(tasksFromLocaleStorage) : [];
};

const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toogleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAlldone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toogleTaskDone,
    setAlldone,
    addNewTask,
  };
};

export default useTasks;
