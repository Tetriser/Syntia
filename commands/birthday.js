const Discord = require('discord.js');

module.exports = {
    name: "birthday",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Let the sweet and adorable Birthday Cake Cookie make birthdays more enjoyable!",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
		.setTitle('Happy Birthday!')
        .setImage('https://vignette.wikia.nocookie.net/cookierun/images/b/b0/Birthday_Cake_Cookie.png')
        .setDescription('From Birthday Cake Cookie (Cookie Run: Ovenbreak)')

        message.channel.send(emb);
    },
}