import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { selectTasksState } from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  const { tasks } = selectTasksState(store.getState());
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

export default store;