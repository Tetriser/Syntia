const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hyperesponsibly')
		.setDescription("An important reminder before watching any huge gaming events!"),
	async execute(interaction) {
        await interaction.reply('https://cdn.discordapp.com/attachments/433608545158823937/574783597060554753/6e8de3a56c67ec52eb81257e95137e387d8f85e6v2_hq.jpg');
    },
};