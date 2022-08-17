const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('decide')
		.setDescription("Let Syntia decide your thoughts.")
		.addStringOption(option => option.setName("thought").setDescription("Your thought.").setRequired(true)),
	async execute(interaction) {
		var decidal = [
			'Good idea.',
			'That should work.',
			'I agree.',
			'Why not?',
			'Sounds good to me.',
			'I don\'t get it.',
			'Huh?',
			'That wasn\'t clear enough...',
			'Call again?',
			'I don\'t understand at all.',
			'Unfortunately, not my cup of tea.',
			'I am not into that, sorry.',
			'I disagree.',
			'Nah.'
			];
	
		var decidalcolors = [
			`78FF00`,
			`FCFF00`,
			`FF0000`
		]
	
		var decidalNum;
		var decidalcolor;
	
		let thought = interaction.options.getString("thought");
	
		if(thought == "")
		{
			return;
		}
	
		decidalNum = Math.floor(Math.random() * decidal.length);
		
		if(decidalNum < 10)
		{
			if(decidalNum < 5)
			{
				decidalcolor = 0;
			}
	
			else
			{
				decidalcolor = 1;
			}
		}
	
		else
		{
			decidalcolor = 2;
		}
	
		const emb = new MessageEmbed()
		.setTitle(thought)
		.setDescription(decidal[decidalNum])
		.setColor(decidalcolors[decidalcolor])

		await interaction.reply({embeds: [emb]});
    },
};