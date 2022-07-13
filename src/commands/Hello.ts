import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import { publicRoute } from "./../ApiCalls";

export const Hello: Command = {
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

export const ElementList: Command = {
    name: "get-all-data",
    description: "Show available data",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const res = await publicRoute.getAllTypes(); 
            console.log(res);
            // const content = res;
            
            await interaction.followUp({
                ephemeral: true,
                content
        });
    }
}