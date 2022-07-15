import { BaseCommandInteraction, Client } from "discord.js";
import { embedFunction } from "./embedMessageGlobal";
import { Command } from "../Command";
import { getAllTypes } from "../ApiCalls";

export const HelloCommand: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const content = "Hello there!";
            
            await interaction.followUp({
                ephemeral: true,
                content
        });
    }
}; 

export const AllCommands: Command = {
    name: "get-all-information",
    description: "Show available information about genshin",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const data: { types?: string[] } = await getAllTypes(); 
            
            const embedMessage: object = embedFunction(
                data?.types?.map((r: string, i: number): object => {
                    return {
                        name: `${i + 1}. ${r}`,
                        value: "`/" +r + "`"
                    }
                }),
                true,
                "What information this bot provides",
            );

            await interaction.followUp({
                ephemeral: true,
                embeds: [embedMessage]
        });
    }
}