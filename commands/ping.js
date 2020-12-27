const Discord = require('discord.js');

module.exports = {
    name: "ping",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Is this bot work? Check the ping between this bot and Discord.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Score! 🏓')
        .setDescription('I mean, pong!')
        .setColor(0xFF5000)
        .addField('Latency', message.client.ping.toString() + 'ms')

        message.channel.send(emb);
    }
}