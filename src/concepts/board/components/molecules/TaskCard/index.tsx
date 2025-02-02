import { Title } from "@/ui/components/atoms/Title";
import { TaskIcon } from "../../atoms/TaskIcon";
import { TaskType } from "../../organisms/TasksTable/types";
import { TaskStatus } from "../../atoms/TaskStatus";
import { useTaskBoardContext } from "@/concepts/board/contexts/TaskBoardContext";
import { useMemo } from "react";
import { TaskCardProps } from "./types";

const backgroundColor: { [key: string]: string } = {
  default: "bg-tasks-bg-default",
  progress: "bg-tasks-bg-progress",
  "wont-do": "bg-tasks-bg-wont-do",
  completed: "bg-tasks-bg-completed"
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, setOpen }) => {
  const { fillTask, taskId } = useTaskBoardContext();
  const isSelectedTask = useMemo(() => {
    return task.id === taskId;
  }, [task, taskId]);
  const TaskCardContainerStyles = useMemo(() => {
    return `rounded-lg flex flex-col p-3 min-w-[25rem] min-h-fit ${
      backgroundColor[task.status || "default"]
    } ${
      isSelectedTask &&
      "outline outline-[2px] outline-offset-[3px] outline-[#4E80EE]"
    }`;
  }, [task, isSelectedTask]);

  const selectTask = (task: TaskType) => {
    fillTask(task);
    setOpen(true);
  };

  return (
    <div className={TaskCardContainerStyles} onClick={() => selectTask(task)}>
      <header className="flex gap-3 items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <TaskIcon icon={task.icon} />
          <Title size="medium" value={task.name} />
        </div>
        <TaskStatus status={task.status} />
      </header>
      {!!task.description && (
        <div className="px-11 mt-[-0.5rem] text-color-soft font-normal text-xs m-0">
          {task.description}
        </div>
      )}
    </div>
  );
};
