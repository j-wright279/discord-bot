// Require the necessary discord.js classes
import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { commands } from "./commands";

const { TOKEN } = process.env; 

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('interactionCreate', async interaction => {
	if(!interaction.isChatInputCommand()) return;

	const command = commands.find(command => command.command.name === interaction.commandName);
	if(!command) return;

	console.log(`[Stuff4Free] running command ${command.command.name}`);

	await command.execute(interaction);
})

client.login(TOKEN);
