import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    query: "",
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toogleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    toogleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
    setAllDone: (state) => {
      state.tasks = state.tasks.map((task) => ({ ...task, done: true }));
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    setExampleTasksLoading: (state, { payload }) => {
      state.exampleTasksLoading = payload;
    },
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
  },
});

export const {
  addTask,
  toogleHideDone,
  toogleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
  setExampleTasksLoading,
  removeAllTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectAreTasksUndone = (state) =>
  selectTasks(state).every(({ done }) => !done);
export const selectExampleTasksLoading = (state) =>
  state.tasks.exampleTasksLoading;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) => {
  return selectTasks(state).find(({ id }) => id === taskId);
};

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;