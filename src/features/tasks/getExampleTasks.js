export const getExampleTasks = async () => {
  const response = await fetch("todos-list-react/exampleTasks.json");
  console.log(response);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
