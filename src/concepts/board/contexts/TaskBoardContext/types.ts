import { Dispatch, SetStateAction } from "react";
import { IconEnum, StatusEnum, TaskType } from "../../components/organisms/TasksTable/types";

export type TaskBoardContextType = {
  taskList?: TaskType[];
  taskId?: string;
  setTaskId: Dispatch<SetStateAction<string | undefined>>;
  taskName: string;
  setTaskName: Dispatch<SetStateAction<string>>;
  taskDescription: string;
  setTaskDescription: Dispatch<SetStateAction<string>>;
  taskIcon?: IconEnum;
  setTaskIcon: Dispatch<SetStateAction<IconEnum | undefined>>;
  taskStatus?: StatusEnum;
  setTaskStatus: Dispatch<SetStateAction<StatusEnum | undefined>>;
  fillTask: (task: TaskType) => void;
  clearTask: () => void;
  createTask: () => void;
  updateTask: () => void;
  deleteTask: () => void;
};
