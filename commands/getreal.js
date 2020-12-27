const Discord = require('discord.js');

module.exports = {
    name: "getreal",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "I have no idea how this suddenly got popular...",
    execute(message, args) {
		var grimages = [
			'https://media1.tenor.com/images/6e734f4a360d52526a19876465641e53/tenor.gif',
			'https://media1.tenor.com/images/1821d8765b3bd61f68536985ea2eb721/tenor.gif',
			'https://media1.tenor.com/images/5b662e60b952035125b336dde587236d/tenor.gif',
			'https://media1.tenor.com/images/28db2611e97ca2dbd24c9bf34e8f68ea/tenor.gif',
			'https://media.tenor.com/images/1ed6361a619fa57837323314fe73254f/tenor.gif'
			]

		var whee;

		whee = Math.floor(Math.random() * grimages.length)

		const emb = new Discord.MessageEmbed()
		.setImage(grimages[whee])

        message.channel.send(emb)
    }
}