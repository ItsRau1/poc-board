import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import {
  IconEnum,
  StatusEnum,
  TaskType
} from "../../components/organisms/TasksTable/types";
import { TaskBoardContextType } from "./types";
import { MOCK_DATA } from "./constantes";

const TaskBoardContext = createContext({} as TaskBoardContextType);

export const useTaskBoardContext = () => useContext(TaskBoardContext);

export const TaskBoardContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [taskList, setTaskList] = useState<TaskType[] | undefined>();
  const [taskId, setTaskId] = useState<string | undefined>();
  const [taskName, setTaskName] = useState<string>("nAME");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskIcon, setTaskIcon] = useState<IconEnum | undefined>(
    "man-technologist"
  );
  const [taskStatus, setTaskStatus] = useState<StatusEnum | undefined>(
    "completed"
  );

  const fillTask = (task: TaskType) => {
    setTaskId(task.id);
    setTaskName(task.name);
    setTaskDescription(task.description || "");
    setTaskIcon(task.icon);
    setTaskStatus(task.status);
  };

  const clearTask = () => {
    setTaskId(undefined);
    setTaskName("");
    setTaskDescription("");
    setTaskIcon(undefined);
    setTaskStatus(undefined);
  };

  const createTask = () => {};

  const updateTask = () => {};

  const deleteTask = () => {};

  // TODO: Remover após integração com API
  useEffect(() => {
    setTaskList(MOCK_DATA);
  }, []);

  return (
    <TaskBoardContext.Provider
      value={{
        taskList,
        taskId,
        setTaskId,
        taskName,
        setTaskName,
        taskDescription,
        setTaskDescription,
        taskIcon,
        setTaskIcon,
        taskStatus,
        setTaskStatus,
        fillTask,
        clearTask,
        createTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </TaskBoardContext.Provider>
  );
};
