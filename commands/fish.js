const Discord = require('discord.js');

module.exports = {
    name: "fish",
    aliases: ["feed"],
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Mods are asleep, post fish.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Mods are asleep, post fish')
            .setImage('https://cdn.discordapp.com/attachments/433608545158823937/474818095005958164/post_fish.gif')

        message.channel.send(emb);
    }
}