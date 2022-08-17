const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Play ping-pong with Syn- I mean, calculate the rates between the bot and Discord.'),
	async execute(interaction) {
        const emb = new MessageEmbed()
        .setTitle('Score! 🏓')
        .setDescription('I mean, pong!')
        .setColor(0xFF5000)
        .addField('Client Latency', Date.now() - interaction.createdTimestamp + 'ms')
        .addField('API Latency', Math.round(interaction.client.ws.ping) + 'ms')

        await interaction.reply({ embeds: [ emb ] });
	},
};