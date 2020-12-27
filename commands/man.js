const Discord = require('discord.js');

module.exports = {
    name: "man",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Why is this getting popular these days?",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
            .setImage('https://cdn.discordapp.com/attachments/433608545158823937/726251031410901042/grlfctfhxam41.png')

        message.channel.send(emb);
    }
}