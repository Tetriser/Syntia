const Discord = require("discord.js");
const { prefix } = require(`../config.json`)

module.exports = {
    name: "help",
    requireArgument: false,
    ownerOnly: false,
    server: false,
    description: 'Get more information about a specific command or a list of all available commands.',
    syntax: '<command> (empty for a command list)',
    execute(message, args) {
        const { commands } = message.client;

        if (!args.length) {
            const commandList = commands.map(command => command.name).join(`\n`)

            const emb = new Discord.MessageEmbed()
            .setTitle(`These are my commands.`)
            .setDescription
                (`Use ${prefix}<command> to get more info about the command.\n\n` + commandList)

            return message.author.send(emb)
                .then(() => {
                    if (message.channel.type === 'dm') {
                        return;
                    }

                    message.reply('check your DMs! 💬');
                }

                )
                .catch(error => {
                    console.error(error);
                    message.reply("looks like I can\'t DM you! Do you have DMs disabled? ❓");
                })
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
        
        if (!command) {
            return message.reply('I don\'t think I have that command... 😅');
        }
        
        const emb = new Discord.MessageEmbed()
        .setTitle(command.name)

        if(command.description) {
            emb.setDescription(command.description)
        }

        if(command.ownerOnly)
            emb.addField("Owner only", command.ownerOnly ? "Yes" : "No")

        if(command.modsOnly)
            emb.addField("Moderators only", command.modsOnly ? "Yes" : "No")

        if(command.aliases) {
            emb.addField("Aliases", command.aliases.join(", "))
        }

        if(command.syntax) {
            emb.addField("Syntax", command.syntax)
        }

        message.channel.send(emb);
    },
}