import type { Command, CommandAction } from "@/types/commands.types";

export class CommandParser {
  private args: string[];
  constructor() {
    this.args = process.argv.slice(2);
  }
  parse = (): Command => {
    const command = this.args[0] as CommandAction;
    const commandHandler = {
      add: { command, description: this.args[1] },
      update: {
        command,
        id: parseInt(this.args[1]),
        description: this.args[2],
      },
      delete: { command, id: parseInt(this.args[1]) },
      list: { command, status: this.args[1] },
      "mark-in-progress": { command, id: parseInt(this.args[1]) },
      "mark-done": { command, id: parseInt(this.args[1]) },
      "mark-todo": { command, id: parseInt(this.args[1]) },
    };
    if (!commandHandler[command]) throw new Error("Command not found");
    return commandHandler[command] as Command;
  };
}
