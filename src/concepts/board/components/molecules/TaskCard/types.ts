import { Dispatch, SetStateAction } from "react";
import { TaskType } from "../../organisms/TasksTable/types";

export type TaskCardProps = {
  task: TaskType;
  setOpen: Dispatch<SetStateAction<boolean>>;
};