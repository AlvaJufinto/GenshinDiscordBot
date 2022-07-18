import { BaseCommandInteraction, Client, } from "discord.js";
import { embedFunction } from "./embedMessageGlobal";
import { Command } from "../Command";
import { getItems } from "../ApiCalls";

// Make embed command
export const getArtifacts: Command = {
    name: "artifacts",
    description: "Returns a greeting and other information",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const data = await getItems('artifacts') as string[]; 
            const dataPerPage = 10;
            
            const embedMessageOne: object = embedFunction(
                "Artifact List",
                false, 
                "To get spesific info about an item `/type-name item-name` ",
                data?.slice(dataPerPage * 0, dataPerPage * 1).map((d: string, i: number): object => { 
                    return {
                        name: `${i + 1}. ${d}`,
                        value: "`/artifacts " +d + "`"
                    }
                }),
            );
            const embedMessageTwo: object = embedFunction(
                "Artifact List",
                false, 
                "To get spesific info about an item `/type-name item-name` ",
                data?.slice(dataPerPage * 1, dataPerPage * 2)?.map((d: string, i: number): object => { 
                    return {
                        name: `${i + (dataPerPage * 1 + 1)}. ${d}`,
                        value: "`/artifacts " +d + "`"
                    }
                }),
            );
            const embedMessageThree: object = embedFunction(
                "Artifact List",
                false, 
                "To get spesific info about an item `/type-name item-name` ",
                data?.slice(dataPerPage * 2, dataPerPage * 4)?.map((d: string, i: number): object => { 
                    return {
                        name: `${i + (dataPerPage * 2 + 1)}. ${d}`,
                        value: "`/artifacts " +d + "`"
                    }
                }),
            );

            await interaction.followUp({
                ephemeral: true,
                embeds: [embedMessageOne, embedMessageTwo, embedMessageThree]
        });
    }
}; 