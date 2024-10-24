import { REST, Routes } from "discord.js";
import { commands } from "./commands";
import "dotenv/config";

const { CLIENT_ID, TOKEN } = process.env;

const init = async () => {
    const rest = new REST({ version: '10' }).setToken(TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands.map(command => command.command) });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}
init()