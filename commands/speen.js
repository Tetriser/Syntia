const Discord = require('discord.js');

module.exports = {
    name: "smitty",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "The mascot of SONAR himself!",
    execute(message, args) {
		var speenImgs = [
			'https://cdn.discordapp.com/attachments/361763227299741698/662516656408363018/562396716775505941.gif',
			'https://media.tenor.com/images/26e91c9e54b57b4dd228d019f8de9a4f/tenor.gif',
			'https://cdn.discordapp.com/attachments/361763227299741698/662517750262005771/417702898625937408.gif'
			];

		var speen;

		speen = Math.floor(Math.random() * speenImgs.length);

		const emb = new Discord.MessageEmbed()
		.setTitle('Speen!')
		.setImage(speenImgs[speen])

		message.channel.send(emb);
	}
}