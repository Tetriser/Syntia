const Discord = require('discord.js');

module.exports = {
    name: "water",
    requireArgument: false,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "A parody based of a music from a Final Fantasy game, it's funny.",
    execute(message, args) {
        message.channel.send(`https://www.youtube.com/watch?v=vKhHwpkL17o`);
    }
}