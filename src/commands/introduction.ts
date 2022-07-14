import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../Command";
import { getAllTypes } from "../ApiCalls";

const thumbnail: string = "https://cdn.discordapp.com/attachments/889147010807124023/995539145038516324/chonguss.jpg"

const footer: object = {
    text: 'Made by Alva', 
    iconURL: thumbnail
}

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

export const AllCommand: Command = {
    name: "get-all-information",
    description: "Show available information about genshin",
    type: "CHAT_INPUT",
    run: 
        async (client: Client, interaction: BaseCommandInteraction) => {
            const data = await getAllTypes() as any; 
            console.log(data);
            
            const embedMessage = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Choose one...')
                // .setURL('https://discord.js.org/')
                // .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
                .setDescription('What information this bot provides')
                .setThumbnail(thumbnail)
                .addFields( 
                    {
                        name: '_ _', 
                        value: "_ _",
                    },
                    data?.types?.map((r: string, i: number): object => {
                        return {
                            name: `${i + 1}. ${r}`,
                            value: "`/" +r + "`"
                        }
                    }),
                    {
                        name: '_ _', 
                        value: '_ _',
                        inline: true
                    },
                )
                .addField("Add GenshinBot to your server!", "[Click here](https://discordapp.com/oauth2/authorize?client_id=439778986050977792&scope=bot&permissions=8)")
                .addField("API Source", "[Click here](https://genshin.dev/)")
                .setFooter(footer as any);

            await interaction.followUp({
                ephemeral: true,
                embeds: [embedMessage]
        });
    }
}