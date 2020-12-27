const Discord = require('discord.js');

module.exports = {
    name: "oof",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "The sound when you die in Roblox.\n(the filename shows that it's actually supposed to be \"uuhhh\"",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Oof!')
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/433655634068504577/20a009334aa3c21b0540945568cca0a3.png')

        message.channel.send(emb);
    }
}