const Discord = require('discord.js');

module.exports = {
    name: "horse",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Just a horse, what else?",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Wazzup')
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/459689133325942795/randomhorse.png')

        message.channel.send(emb);
    }
}