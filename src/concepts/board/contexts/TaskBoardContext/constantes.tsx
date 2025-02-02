import { RadioItemProps } from "@/ui/components/molecules/RadioGroup";
import { TaskType } from "../../components/organisms/TasksTable/types";
import Image from "next/image";
import { TaskStatus } from "../../components/atoms/TaskStatus";

// TODO: Apagar arquivo após integração com API

export const MOCK_DATA: TaskType[] = [
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
  },
  {
    id: "task-05",
    name: "task 5",
    icon: "man-technologist",
    description: "description task 5"
  }
];

export const radioItemsIcon: RadioItemProps[] = [
  {
    icon: (
      <Image
        src="./icons/man-technologist.svg"
        alt="man technologist"
        width={18}
        height={18}
      />
    ),
    id: "man-technologist"
  },
  {
    icon: (
      <Image
        src="./icons/speech-balloon.svg"
        alt="speech ballon"
        width={18}
        height={18}
      />
    ),
    id: "speech-balloon"
  },
  {
    icon: (
      <Image
        src="./icons/hot-beverage.svg"
        alt="hot coffe"
        width={18}
        height={18}
      />
    ),
    id: "hot-beverage"
  },
  {
    icon: (
      <Image
        src="./icons/man-lifting-weights.svg"
        alt="hot coffe"
        width={18}
        height={18}
      />
    ),
    id: "man-lifting-weights"
  },
  {
    icon: (
      <Image src="./icons/books.svg" alt="hot coffe" width={18} height={18} />
    ),
    id: "books"
  },
  {
    icon: (
      <Image
        src="./icons/alarm-clock.svg"
        alt="hot coffe"
        width={18}
        height={18}
      />
    ),
    id: "alarm-clock"
  }
];

export const radioItemsStatus: RadioItemProps[] = [
  {
    icon: <TaskStatus status="progress" />,
    id: "progress",
    title: "In Progress"
  },
  {
    icon: <TaskStatus status="completed" />,
    id: "completed",
    title: "Completed"
  },
  {
    icon: <TaskStatus status="wont-do" />,
    id: "wont-do",
    title: "Won't do"
  }
];
