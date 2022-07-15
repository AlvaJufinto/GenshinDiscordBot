import { MessageEmbed } from "discord.js"

export const thumbnail: string = "https://cdn.discordapp.com/attachments/889147010807124023/995539145038516324/chonguss.jpg"

export const footer: object = {
    text: 'Made by Alva', 
    iconURL: thumbnail
}

export const embedFunction = (data: any): object => {
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
        data,
        {
            name: '_ _', 
            value: '_ _',
            inline: true
        },
    )
    .addField("Add GenshinBot to your server!", "[Click here](https://discordapp.com/oauth2/authorize?client_id=439778986050977792&scope=bot&permissions=8)")
    .addField("API Source", "[Click here](https://genshin.dev/)")
    .setFooter(footer as any);

    return embedMessage;
}
