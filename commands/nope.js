const Discord = require('discord.js');

module.exports = {
    name: "nope",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "The iconic quote from Team Fortress 2's Engineer.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
            .setImage('https://cdn.discordapp.com/attachments/433608545158823937/464424004548296704/flat550x550075f.png')

        message.channel.send(emb);
    }
}