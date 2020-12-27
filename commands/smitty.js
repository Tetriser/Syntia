const Discord = require('discord.js');

module.exports = {
    name: "smitty",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "The mascot of SONAR himself!",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle("Hello!")
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/465489233335943168/Smitty.png')

        message.channel.send(emb);
    }
}