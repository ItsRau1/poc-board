import { TaskType } from "../../components/organisms/TasksTable/types";

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