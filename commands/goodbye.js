const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goodbye')
		.setDescription("Time to go."),
	async execute(interaction) {
        await interaction.reply('https://c.tenor.com/YDibgklRsWQAAAAC/spongebob-plankton.gif');
    },
};