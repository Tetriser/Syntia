const Discord = require("discord.js")
const pkg = require("../package.json")
const config = require("../config.json")

module.exports = {
    name: "about",
    requireArgument: false,
    ownerOnly: false,
    description: 'Version info, changelog and more.',
    execute(message) {
        const emb = new Discord.MessageEmbed()
        .setTitle("Syntia")
        .setDescription("Version " + pkg.version)
        .setColor(0xf442aa)
        .setThumbnail(message.client.user.avatarURL())
        
        .addField("Changes",
        "- All-new simplified command handler" + "\n" + 
        "- All-new help system" + "\n" + 
        "- `images` has been removed in favor of the new help system" + "\n" + 
        "- Updated Discord.js to " + pkg.dependencies['discord.js'])
        
        .addField("Changed commands",
        "```diff\n" + "+ " + config.prefix + "speak\n" + 
        "+ " + config.prefix + "entrance\n" + 
        "+ " + config.prefix + "prune\n" +  
        "+ " + config.prefix + "impostor\n" + 
        "+ " + config.prefix + "getreal\n" + 
        "- " + config.prefix + "images" + 
        "# All images commands" + "\n```"
        , true)
        
        message.channel.send(emb)
        .catch(error => {
            return;
        })
    },
}