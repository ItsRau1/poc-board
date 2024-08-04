export type TaskType = {
  id: string;
  name: string;
  description?: string;
  icon: IconType;
  status?: StatusType;
} 

type IconType = "man-technologist" | "speech-balloon" | "hot-beverage" | "man-lifting-weights" | "books" | "alarm-clock";

type StatusType = "progress" | "completed" | "wont-do"