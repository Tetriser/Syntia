const Discord = require('discord.js');

module.exports = {
    name: "entrance",
    aliases: ["trojanhorse"],
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Mini trojan horse incoming!",
    execute(message, args) {
        const emb = new Discord.MessageEmbed()
        .setTitle('Hellooooooooooooooo everyone!')
        .setImage('https://media1.tenor.com/images/7c04eac926347bf1d5884a66630c970b/tenor.gif')
    
        message.channel.send(emb);   
    }
}