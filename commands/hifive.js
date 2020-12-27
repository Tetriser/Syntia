const Discord = require("discord.js")

module.exports = {
    name: "hifive",
    aliases: ["hi5", "highfive"],
    requireArgument: false,
    ownerOnly: false,
    cooldown: 5,
    description: 'High-fives with Syntia!',
    execute(message) {
        message.reply("High-five! 🖐")
        .then(function(msg) {
            msg.react("🖐")
        })
        .catch(error => {
            return;
        })
    },
}