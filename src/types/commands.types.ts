export type Command =
  | { command: "add"; description: string }
  | { command: "update"; id: number; description: string }
  | { command: "delete"; id: number }
  | { command: "list"; status?: string }
  | { command: "mark-in-progress"; id: number }
  | { command: "mark-done"; id: number }
  | { command: "mark-todo"; id: number };

export type CommandAction =
  | "add"
  | "update"
  | "delete"
  | "list"
  | "mark-in-progress"
  | "mark-done"
  | "mark-todo";

export type AddArgs = { description: string };
export type UpdateArgs = { id: number; description: string };
export type DeleteArgs = { id: number };
export type ListArgs = { status?: string };
export type MarkInProgressArgs = { id: number };
export type MarkDoneArgs = { id: number };
export type MarkTodoArgs = { id: number };

export type CommandArgs =
  | AddArgs
  | UpdateArgs
  | DeleteArgs
  | ListArgs
  | MarkInProgressArgs
  | MarkDoneArgs
  | MarkTodoArgs;
