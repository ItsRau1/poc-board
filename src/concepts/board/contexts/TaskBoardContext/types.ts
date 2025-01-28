import { Dispatch, SetStateAction } from "react";
import { IconType, StatusType, TaskType } from "../../components/organisms/TasksTable/types";

export type TaskBoardContextType = {
  taskList?: TaskType[];
  selectedTask?: TaskType;
  setSelectedTask: Dispatch<SetStateAction<undefined | TaskType>>;
  taskName: string;
  setTaskName: Dispatch<SetStateAction<string>>;
  taskDescription: string;
  setTaskDescription: Dispatch<SetStateAction<string>>;
  taskIcon?: IconType;
  setTaskIcon: Dispatch<SetStateAction<IconType | undefined>>;
  taskStatus?: StatusType;
  setTaskStatus: Dispatch<SetStateAction<StatusType | undefined>>;
  createTask: () => void;
  updateTask: () => void;
  deleteTask: () => void;
};
