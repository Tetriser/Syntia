const Discord = require('discord.js');

module.exports = {
    name: "milly",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Smitty's beloved cousin, and the second mascot of SONAR.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Hi!')
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/491967622699810827/Milly.png')

        message.channel.send(emb);
    }
}