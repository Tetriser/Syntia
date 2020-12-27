module.exports = {
    name: "speak",
    requireArgument: true,
    ownerOnly: true,
    aliases: ["talk", "say", "message"],
    description: 'Make Syntia talk like a normal Discord user.',
    syntax: '<channel> <message>',
    execute(message, args) {
        let ch = message.mentions.channels.first();
        let m = args.slice(1).join(" ");
        let om = message.id;
    
        try {
            message.client.channels.cache.get(ch.id.toString()).send(m);
            message.channel.messages.fetch(om)
            .then(function(message) {
                message.delete()
            })
        }

        catch (e) {
            console.log(e);
        }
},
}