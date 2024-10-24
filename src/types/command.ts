import { ChatInputCommandInteraction } from "discord.js";

export interface Command {
    command: {
        name: string;
        description: string;
    };
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}