import React, { useState } from "react";
import { TaskCard } from "../../molecules/TaskCard";
import { useTaskBoardContext } from "@/concepts/board/contexts/TaskBoardContext";
import { Modal } from "@/ui/components/molecules/Modal";

export const TasksTable: React.FC = () => {
  const { taskList } = useTaskBoardContext();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-3">
        {!!taskList ? (
          taskList.map((task) => (
            <TaskCard task={task} key={task.id} setOpen={setOpen} />
          ))
        ) : (
          <>Sem Tasks</>
        )}
      </div>
      <footer></footer>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};
