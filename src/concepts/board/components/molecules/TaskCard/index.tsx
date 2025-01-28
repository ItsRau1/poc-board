import { Title } from "@/ui/components/atoms/Title";
import { TaskIcon } from "../../atoms/TaskIcon";
import { TaskType } from "../../organisms/TasksTable/types";
import { TaskStatus } from "../../atoms/TaskStatus";

export type TaskCardProps = {
  task: TaskType;
};

const backgroundColor: { [key: string]: string } = {
  default: "bg-tasks-bg-default",
  progress: "bg-tasks-bg-progress",
  "wont-do": "bg-tasks-bg-wont-do",
  completed: "bg-tasks-bg-completed"
};

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div
      className={`rounded-lg flex flex-col p-3 min-w-[25rem] min-h-fit ${
        backgroundColor[task.status || "default"]
      }`}
    >
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
