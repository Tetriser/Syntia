const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template')
		.setDescription("Add your command description here."),
	async execute(interaction) {
        // Add stuff here
        },
};