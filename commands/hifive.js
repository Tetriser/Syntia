const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hifive')
		.setDescription("Gimme five, Syntia!"),
	async execute(interaction) {
        await interaction.reply('https://c.tenor.com/ZwCtCqWbQFMAAAAC/hifive.gif');
    },
};