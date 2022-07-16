import { Command } from "./Command";
import { HelloCommand, HelpCommands } from "./commands/getIntroCommands";
import { getArtifacts } from "./commands/getItemsCommands";

export const Commands: Command[] = [HelloCommand, HelpCommands, getArtifacts];