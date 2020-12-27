const Discord = require('discord.js');
module.exports = {
    name: "argh",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: 
        "> \"Why couldn't the 11-year-old getting to the pirate movie?\"\n> \"Why?\"\n> \"It was rated **'R'**!\"\n> - *\"Krab Borg\" - SpongeBob SquarePants*",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle("It was rated 'R'!")
        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/433608739799564288/r-posting.png')
    
        message.channel.send(emb);
    },
}