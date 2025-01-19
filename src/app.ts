import { join } from "path";
import type { Task, TaskState } from "@/types/task.type";
import { CommandParser } from "@/CommandParser";

const jsonPath = join(process.cwd(), "./data/tasks.json");
const jsonFile = Bun.file(jsonPath);
const validStatuses: TaskState[] = ["in-progress", "done", "todo"];

const addTask = async (description: string) => {
  const data: Task[] = (await jsonFile.json()) ?? [];
  const idTask = data.length > 0 ? data[data.length - 1].id + 1 : 1;

  if (!description) throw new Error("Description is required");

  const task: Task = {
    id: idTask,
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  data.push(task);
  await Bun.write(jsonPath, JSON.stringify(data, null, 2));
  return `Task ${idTask} added`;
};
const updateTask = async (id: number, description: string) => {
  const data: Task[] = await jsonFile.json();
  const task = data.find((task) => task.id === id);

  if (!task) throw new Error("Task not found");
  if (!description) throw new Error("Description is required");
  if (!validStatuses.includes(task.status)) {
    throw new Error("Invalid status");
  }

  task.description = description;
  task.updatedAt = new Date();
  await Bun.write(jsonPath, JSON.stringify(data, null, 2));
  return `Task ${id} updated`;
};
const deleteTask = async (id: number) => {
  const data: Task[] = await jsonFile.json();
  const removeIndex = data.findIndex((task) => task.id === id);
  if (removeIndex === -1) {
    throw new Error("Task not found");
  }
  data.splice(removeIndex, 1);
  await Bun.write(jsonPath, JSON.stringify(data, null, 2));
  return `Task ${id} deleted`;
};
const listTasks = async (status?: TaskState) => {
  const data: Task[] = await jsonFile.json();
  return status ? data.filter((task) => task.status === status) : data;
};
const markTask = async (id: number, status: TaskState) => {
  const data: Task[] = await jsonFile.json();
  const task = data.find((task) => task.id === id);

  if (!task) throw new Error("Task not found");

  task.status = status;
  task.updatedAt = new Date();

  await Bun.write(jsonPath, JSON.stringify(data, null, 2));

  return `Task ${id} marked as ${status}`;
};

async function main() {
  try {
    const parser = new CommandParser();
    const command = parser.parse();
    const fileExists = await jsonFile.exists();
    if (!fileExists) await Bun.write(jsonPath, "[]");

    switch (command.command) {
      case "add":
        const messageAdd = await addTask(command.description);
        console.log(messageAdd);
        break;
      case "update":
        const messageUpdate = await updateTask(command.id, command.description);
        console.log(messageUpdate);
        break;
      case "delete":
        const messageDelete = await deleteTask(command.id);
        console.log(messageDelete);
        break;
      case "list":
        const listValues = await listTasks(command.status as TaskState);
        console.log(listValues);
        break;
      case "mark-in-progress":
        const messageInProgress = await markTask(command.id, "in-progress");
        console.log(messageInProgress);
        break;
      case "mark-done":
        const messageDone = await markTask(command.id, "done");
        console.log(messageDone);
        break;
      case "mark-todo":
        const messageTodo = await markTask(command.id, "todo");
        console.log(messageTodo);
        break;
      default:
        throw new Error("Command not found");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Error:", error);
    }
  }
}
main();
