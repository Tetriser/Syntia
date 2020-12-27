const Discord = require('discord.js');

module.exports = {
    name: "congrats",
    aliases: ["congratulations, omedeto"],
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Dark Prince / Satan from Puyo Puyo is here to celebrate whatever you're celebrating!",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Congratulations!')
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/433992555701731348/203018952x.png')
    
        message.channel.send(emb);    
    }
}