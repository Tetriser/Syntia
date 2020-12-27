const Discord = require('discord.js');
module.exports = {
    name: "again",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "> \"Ah (bleep), here we go again.\"\n> *- Carl Johnson, Grand Theft Auto: San Andreas*",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setFooter("Source: Grand Theft Auto: San Andreas")
        .setImage('https://i.kym-cdn.com/entries/icons/original/000/029/223/cover2.jpg')

        message.channel.send(emb)
    },
}