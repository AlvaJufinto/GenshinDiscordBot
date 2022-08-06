import { Command } from "./Command";
import { HelloCommand, HelpCommands } from "./commands/getIntroCommands";
import { getArtifacts, getElements } from "./commands/getItemsCommands";

const introCommand: Command[] = [HelloCommand, HelpCommands];
const itemCommand: Command[] = [getArtifacts, getElements];

export const Commands: Command[] = [HelloCommand, HelpCommands, ...itemCommand];