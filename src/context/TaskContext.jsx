import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return <TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask
  }}>{props.children}</TaskContext.Provider>;
}
