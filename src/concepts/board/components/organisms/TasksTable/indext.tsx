import React from "react";
import { StatusType, TaskType } from "./types";
import Image from "next/image";
import { TaskStatus } from "../../atoms/TaskStatus";

const MOCK_DATA: TaskType[] = [
  {
    id: "task-01",
    name: "task 1",
    icon: "man-technologist",
    description: "description task 1",
    status: "progress",
  },
  {
    id: "task-02",
    name: "task 2",
    icon: "speech-balloon",
    status: "wont-do",
  },
  {
    id: "task-03",
    name: "task 3",
    icon: "man-lifting-weights",
  },
  {
    id: "task-04",
    name: "task 4",
    icon: "man-technologist",
    status: "completed",
  },
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
    completed: "bg-tasks-bg-completed",
  };
  return (
    <div>
      <div className="flex flex-col gap-3">
        {MOCK_DATA.map((task) => {
          return (
            <div
              key={task.id}
              className={`rounded-lg flex flex-col p-3 ${
                backgroundColor[task.status || backgroundColor.default] ||
                backgroundColor.default
              }`}
            >
              <header className="flex gap-3 items-center">
                {/* TODO: Componentizar o ícone */}
                <div>
                  <Image
                    src={`./icons/${task.icon}.svg`}
                    alt={task.icon}
                    width={16}
                    height={16}
                  />
                </div>
                {task.name}
                <TaskStatus status={task.status} />
              </header>
              {task.description}
            </div>
          );
        })}
      </div>
      <footer></footer>
    </div>
  );
};
