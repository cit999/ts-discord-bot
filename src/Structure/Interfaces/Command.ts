import { ChatInputApplicationCommandData, CommandInteraction, PermissionResolvable } from "discord.js";
import { CustomClient } from "../Classes/Client.js";

export interface Command extends ChatInputApplicationCommandData {
    developer?: boolean;
    botOwnerOnly?: boolean;
    botPermissions?: PermissionResolvable[];
    execute: (interaction: CommandInteraction, client: CustomClient) => any;
}