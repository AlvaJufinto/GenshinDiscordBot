import { BaseCommandInteraction, Client } from "discord.js";
import { embedFunction } from "./embedMessageGlobal";
import { Command } from "../Command";
import { getAllTypes } from "../ApiCalls";

// Make Hello embed command
export const HelloCommand: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const content = "Hello there! 👋";
            
            const embedMessage: object = embedFunction(
                "Hello there!",
                true,
                "I made this bot to help myself learn Typescript \n if you're interested you can check my source code, [Click here](https://github.com/AlvaJufinto/GenshinDiscordBot)",
                [
                    {
                        name: "Simple Guide",
                        value: "If you want to know more about how to use this bot just type : \n `/get-all-information` ",
                    },

                ]
            );
            
            // console.log(embedMessage);
            

            await interaction.followUp({
                ephemeral: true,
                embeds: [embedMessage]
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