export type TaskState = "in-progress" | "done" | "todo";

export type Task = {
  id: number;
  description: string;
  status: TaskState;
  createdAt: Date;
  updatedAt: Date;
};
