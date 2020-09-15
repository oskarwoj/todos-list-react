import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Buttons/styled";
import {
  fetchExampleTasks,
  selectExampleTasksLoading,
} from "./../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectExampleTasksLoading);

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};
export default ExampleTasksButton;
