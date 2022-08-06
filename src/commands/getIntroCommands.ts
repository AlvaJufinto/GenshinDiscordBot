import { BaseCommandInteraction, Client, } from "discord.js";
import { embedFunction } from "./embedMessageGlobal";
import { Command } from "../Command";
import { getAllTypes } from "../ApiCalls";

// Make Hello embed command
export const HelloCommand: Command = {
    name: "hello",
    description: "Returns a greeting and other information",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const content = "Hello there! 👋";
            
            const embedMessage: object = embedFunction(
                "Hello there!",
                true,
                "I made this bot to help myself learn Typescript \n if you're interested you can check my source code, [Click here](https://github.com/AlvaJufinto/GenshinDiscordBot)",
                {
                    name: "Simple Guide",
                    value: "A command to help you understand **the whole thing** : \n `/help` \n \n To get **items based on type** : \n `/type-name` \n ex. `/artifacts` \n \n Get spesific info about **an item** \n `/type-name item-name` \n ex. `/artifacts lavawalker` ",
                },
            );

            await interaction.followUp({
                ephemeral: true,
                embeds: [embedMessage]
        });
    }
}; 

export const HelpCommands: Command = {
    name: "help",
    description: "Show available information about GenshinBot",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const data: { types?: string[] } = await getAllTypes<object>(); 
            
            const embedMessage: object = embedFunction(
                "Choose one...",
                false,
                "What information this bot provides",
                data?.types?.map((r: string, i: number): object => {
                    return {
                        name: `${i + 1}. ${r}`,
                        value: "`/" +r + "`"
                    }
                }),
            );

            await interaction.followUp({
                ephemeral: true,
                embeds: [embedMessage]
        });
    }
}