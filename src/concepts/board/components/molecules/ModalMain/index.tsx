import { useTaskBoardContext } from "@/concepts/board/contexts/TaskBoardContext";
import { Input } from "@/ui/components/atoms/Input";
import { RadioGroup } from "@/ui/components/molecules/RadioGroup";
import { IconEnum, StatusEnum } from "../../organisms/TasksTable/types";
import {
  radioItemsIcon,
  radioItemsStatus
} from "@/concepts/board/contexts/TaskBoardContext/constantes";
import { RadioItemType } from "@/ui/components/atoms/RadioItem/types";

export const ModalMain = () => {
  const {
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
    taskIcon,
    setTaskIcon,
    taskStatus,
    setTaskStatus
  } = useTaskBoardContext();

  return (
    <main className="h-full flex flex-col gap-3">
      <Input
        label="Task name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskName(e.target.value)
        }
        placeholder="Task name"
        value={taskName}
        type="text"
      />
      <Input
        label="Description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskDescription(e.target.value)
        }
        placeholder="Enter a short description"
        value={taskDescription}
        type="textarea"
      />
      <RadioGroup
        items={radioItemsIcon}
        name="task-icon"
        onChange={(e) => setTaskIcon(e.target.id as IconEnum)}
        value={taskIcon?.toString() || ""}
        type={RadioItemType.icon}
        label="Icon"
      />
      <RadioGroup
        items={radioItemsStatus}
        name="task-status"
        onChange={(e) => setTaskStatus(e.target.id as StatusEnum)}
        value={taskStatus?.toString() || ""}
        type={RadioItemType.detail}
        label="Status"
      />
    </main>
  );
};
