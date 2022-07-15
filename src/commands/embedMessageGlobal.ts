import { MessageEmbed } from "discord.js"

export const thumbnail: string = "https://cdn.discordapp.com/attachments/889147010807124023/995539145038516324/chonguss.jpg"

export const developerPicture: string = "https://cdn.discordapp.com/attachments/889147010807124023/994259312224514190/unknown.png";

export const footer: object = {
    text: 'Made by Alva', 
    iconURL: developerPicture
}

export const embedFunction = (title: string, hasThumbnail: boolean, description: string, data: any, embedColor: any = "#0099ff"): object => {
    const embedMessage = new MessageEmbed()
    .setColor(embedColor)
    .setTitle(title)
    // .setURL('https://discord.js.org/')
    // .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription(description)
    .setThumbnail(hasThumbnail ? thumbnail : "")
    .addFields( 
        {
            name: '_ _', 
            value: "_ _",
            inline: true
        },
        data,
        {
            name: '_ _', 
            value: '_ _',
            inline: true
        },
    )
    .addField("Add GenshinBot to your server!", "[Invite this bot](https://discord.com/oauth2/authorize?client_id=996392750519955487&scope=bot)")
    .addField("API Source", "[Genshin Dev](https://genshin.dev/)")
    .setFooter(footer as any);

    return embedMessage;
}
