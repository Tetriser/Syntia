const Discord = require('discord.js');
module.exports = {
	name: "decide",
    requireArgument: true,
    ownerOnly: false,
    modsOnly: false,
	server: true,
	syntax: "<your thoughts>",
    description: "Let Syntia decide your thoughts.",
    execute(message, args) {
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
	
		let thought = args.slice(0).join(" ");
	
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
	
		const emb = new Discord.MessageEmbed()
		.setTitle(thought)
		.setDescription(decidal[decidalNum])
		.setColor(decidalcolors[decidalcolor])
	
		message.channel.send(emb);
	}
}
