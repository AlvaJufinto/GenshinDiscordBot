import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        console.log(`${client.user.username} is online`);

        client.user.setPresence({ 
            activities: [{ name: '/hello | /help', url: "https://www.youtube.com/watch?v=t4LSpjnru2g&ab_channel=FusionTerror" }],
            status: 'online'
        });
    });
};