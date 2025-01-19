# task-cli

## Description
This is a ready-to-use task management application accessible via the command line/terminal. The project is developed using TypeScript and Bun and was created as a project for the [roadmap.sh](https://roadmap.sh/projects/task-tracker) website.

## Project Structure
The project consists of the following structure:

```
<project-root>/
  ├── src/
  │   ├── app.ts
  │   ├── CommandParser.ts
  │   └── types/
  │       ├── commands.types.ts
  │       └── task.type.ts
  ├── package.json
  └── ...
```

The entry point of the application is `./src/app.ts`.

## Requirements
- [Bun](https://bun.sh/) (version 1.1.34 or higher)
- Node.js (optional, depending on your environment)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LucianoOPM/task_tracker.git
   cd task-cli
   ```
2. Install dependencies:
   ```bash
   bun install
   ```

## Usage

You can use the application with the following actions:

- Add a new task:
  ```bash
  bun run add <description>
  ```
- Update an existing task:
  ```bash
  bun run update <id> <description>
  ```
- Delete a task:
  ```bash
  bun run delete <id>
  ```
- Mark as done:
    ``` bash
    bun run mark-done <id>
    ```
    this will update the given task status as done
- Mark as in-progress:
    ``` bash
    bun run mark-in-progress <id>
    ```
    this will update the given task status as in-progress
- Mark as todo:
    ``` bash
    bun run mark-todo <id>
    ```
    this will update the given task status as todo
- List tasks:
  ```bash
  bun run list <status>
  ```
  This will list all tasks or tasks filtered by the given status.

## Compilation

To compile the project, you can use the following command:

```bash
bun run build
```

This will compile the project into an executable file located at `out/task-cli.exe`.

You can use the executable as follows:

```bash
out/task-cli.exe <action> <values>
```

## Contributing
Feel free to fork the repository and submit pull requests to contribute to the project.

