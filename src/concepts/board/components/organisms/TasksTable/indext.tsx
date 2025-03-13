import React, { useState } from "react";
import { TaskCard } from "../../molecules/TaskCard";
import { useTaskBoardContext } from "@/concepts/board/contexts/TaskBoardContext";
import { Modal } from "@/ui/components/molecules/Modal";
import { ModalMain } from "../../molecules/ModalMain";
import { ModalFooter } from "../../molecules/ModalFooter";

export const TasksTable: React.FC = () => {
  const { taskList, clearTask } = useTaskBoardContext();
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
      <Modal
        open={open}
        setOpen={setOpen}
        closeAction={() => clearTask()}
        title="Task Details"
        main={<ModalMain />}
        footer={<ModalFooter />}
      />
    </div>
  );
};
