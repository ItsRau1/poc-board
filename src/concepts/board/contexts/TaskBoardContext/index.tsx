import { createContext, ReactNode, useContext, useState } from "react";
import {
  IconType,
  StatusType,
  TaskType
} from "../../components/organisms/TasksTable/types";
import { TaskBoardContextType } from "./types";

const TaskBoardContext = createContext({} as TaskBoardContextType);

export const useTaskBoardContext = () => useContext(TaskBoardContext);

export const TaskBoardContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [taskList, setTaskList] = useState<TaskType[] | undefined>();
  const [selectedTask, setSelectedTask] = useState<TaskType | undefined>();

  const [taskName, setTaskName] = useState<string>("nAME");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskIcon, setTaskIcon] = useState<IconType | undefined>();
  const [taskStatus, setTaskStatus] = useState<StatusType | undefined>();

  const createTask = () => {};

  const updateTask = () => {};

  const deleteTask = () => {};

  return (
    <TaskBoardContext.Provider
      value={{
        taskList,
        selectedTask,
        setSelectedTask,
        taskName,
        setTaskName,
        taskDescription,
        setTaskDescription,
        taskIcon,
        setTaskIcon,
        taskStatus,
        setTaskStatus,
        createTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </TaskBoardContext.Provider>
  );
};
