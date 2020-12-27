const Discord = require('discord.js');

module.exports = {
    name: "sourceerror",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "3D-printed ERROR model from Valve's Source Engine, used in the most comical way possible.",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('You forgot to install Counter-Strike: Source, fam')
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/464831976386461726/error.jpg')
        .setFooter('https://www.reddit.com/r/totallynotrobots/comments/93fx18/i_am_not_a_very_good_cook/')

        message.channel.send(emb);
    }
}