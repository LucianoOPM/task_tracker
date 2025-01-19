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
