const Discord = require('discord.js');

module.exports = {
    name: "watchout",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Tetris 99 but everyone is attacking you. (Not real, just an edit.)",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
            .setFooter("Edited | Source: Tetris 99 (Nintendo Switch)")
            .setImage('https://cdn.discordapp.com/attachments/433608545158823937/552719023482208277/unknown.png')

        message.channel.send(emb);
    }
}