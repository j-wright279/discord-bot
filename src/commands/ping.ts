import { Command } from "../types/command";

const ping: Command = {
    command: {
        name: 'ping',
        description: 'pong pong pong pong pong pong pong pong pong pong pong pong pong pong pogn',
    },
    execute: async (interaction) => {
        interaction.reply(`Pong for ${interaction.user.username}!`);
    }
} 

export default ping;