export type TaskType = {
  id?: string;
  name: string;
  description?: string;
  icon: IconEnum;
  status?: StatusEnum;
} 

export type IconEnum = "man-technologist" | "speech-balloon" | "hot-beverage" | "man-lifting-weights" | "books" | "alarm-clock";

export type StatusEnum = "progress" | "completed" | "wont-do"