const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('entrance')
		.setDescription("Mini trojan horse incoming!"),
	async execute(interaction) {
        const emb = new EmbedBuilder()
        .setTitle('Hellooooooooooooooo everyone!')
        .setImage('https://media1.tenor.com/images/7c04eac926347bf1d5884a66630c970b/tenor.gif')
    
        await interaction.reply({ embeds: [ emb ] });
    },
};