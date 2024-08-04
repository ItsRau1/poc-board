import React from "react";
import { Props } from "./types";
import Image from "next/image";

export const TaskStatus: React.FC<Props> = ({ status }) => {
  const statusIcons: { [key: string]: any } = {
    progress: {
      src: "progress.svg",
      backgroundColor: "bg-tasks-icon-progress",
    },
    "wont-do": {
      src: "close-ring.svg",
      backgroundColor: "bg-tasks-icon-wont-do",
    },
    completed: {
      src: "done-ring.svg",
      backgroundColor: "bg-tasks-icon-completed",
    },
  };

  if (!status) return null;

  return (
    <div className={`rounded-lg p-2 ${statusIcons[status].backgroundColor}`}>
      <Image
        src={`/icons/${statusIcons[status].src}`}
        width={20}
        height={20}
        alt={`${status} icon`}
      />
    </div>
  );
};
