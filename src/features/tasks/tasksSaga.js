import {
  takeEvery,
  call,
  put,
  takeLatest,
  select,
  delay,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTasks,
  setTasks,
  setExampleTasksLoading,
} from "./tasksSlice";
import { getExampleTasks } from "./TasksPages/TasksList/getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield put(setExampleTasksLoading(true));
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(setExampleTasksLoading(false));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
    yield put(setExampleTasksLoading(false));
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
