import React from "react";
import { StatusType, TaskType } from "./types";
import Image from "next/image";
import { TaskStatus } from "../../atoms/TaskStatus";
import { TaskIcon } from "../../atoms/TaskIcon";
import { Title } from "@/ui/components/atoms/Title";

const MOCK_DATA: TaskType[] = [
  {
    id: "task-01",
    name: "task 1",
    icon: "man-technologist",
    description: "description task 1",
    status: "progress"
  },
  {
    id: "task-02",
    name: "task 2",
    icon: "speech-balloon",
    status: "wont-do"
  },
  {
    id: "task-03",
    name: "task 3",
    icon: "man-lifting-weights"
  },
  {
    id: "task-04",
    name: "task 4",
    icon: "man-technologist",
    status: "completed"
  }
  // {
  // id: "task-05",
  //   name: "task 5",
  //   icon: "man-technologist",
  //   description: "description task 5",
  // },
];

export const TasksTable: React.FC = () => {
  const backgroundColor: { [key: string]: string } = {
    default: "bg-tasks-bg-default",
    progress: "bg-tasks-bg-progress",
    "wont-do": "bg-tasks-bg-wont-do",
    completed: "bg-tasks-bg-completed"
  };
  return (
    <div>
      <div className="flex flex-col gap-3">
        {MOCK_DATA.map((task) => {
          return (
            // Componentizar Task
            <div
              key={task.id}
              className={`rounded-lg flex flex-col p-3 min-w-[25rem] min-h-fit ${
                backgroundColor[task.status || backgroundColor.default] ||
                backgroundColor.default
              }`}
            >
              <header className="flex gap-3 items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <TaskIcon icon={task.icon} />
                  <Title size="medium" value={task.name} />
                </div>
                <TaskStatus status={task.status} />
              </header>
              <div className="px-11 mt-[-0.5rem] text-color-soft font-normal text-xs">
                {task.description}
              </div>
            </div>
          );
        })}
      </div>
      <footer></footer>
    </div>
  );
};
