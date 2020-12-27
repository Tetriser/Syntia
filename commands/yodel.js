const Discord = require('discord.js');

module.exports = {
    name: "yodel",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Shout-outs to Andy8254 for showing this song!",
    execute(message, args) {
        message.channel.send(`Let's chill out, boys and girls, with some yodel!\nhttps://www.youtube.com/watch?v=EdicT9D4gng`);
    }
}