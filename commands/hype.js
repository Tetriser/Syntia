const Discord = require('discord.js');

module.exports = {
    name: "hype",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "A reminder for those that are waiting for any gaming events, especially a Smash Bros. Direct.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
            .setFooter("Source: https://twitter.com/AllSourceGaming/status/907447517096407040")
            .setImage('https://cdn.discordapp.com/attachments/433608545158823937/574783597060554753/6e8de3a56c67ec52eb81257e95137e387d8f85e6v2_hq.jpg')

        message.channel.send(emb);
    }
}