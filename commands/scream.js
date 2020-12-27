const Discord = require('discord.js');

module.exports = {
    name: "scream",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "The iconic scream scene from the 2014 film adaptation of Need for Speed.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
            .setImage('https://i.kym-cdn.com/entries/icons/original/000/023/768/upload.png')
            .setFooter('Source: http://knowyourmeme.com/memes/aaron-paul-screaming')

        message.channel.send(emb);
    }
}