const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const pkg = require("../package.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription("Shows the changelog and version of the bot."),
	async execute(interaction) {
        const emb = new MessageEmbed()
        .setTitle("Syntia")
        .setDescription("Version " + pkg.version)
        .setColor(0xf442aa)
        .setThumbnail(interaction.client.user.avatarURL())
        
        .addField("Changes",
        "- Goodbye, prefixes! Hello, **slash commands**!\n" + 
        "- Updated Discord.js to " + pkg.dependencies['discord.js'])
        
        .addField("Changed commands",
        "- __again__, __argh__, __getreal__, __man__, __oof__, __sourceerror__, __speen__ and __watchout__ have been moved to the new slash command, __memedispenser__ as subcommands, alongside two new subcommands, __bayoenthemkneecaps__ and __rage__.\n" +
        "- - In addition, __speen__ and __getreal__ have some new images in the mix. Try getting them all.\n" +
        "- __smitty__ and __milly__ have been moved to the new slash command, __dropple__ as subcommands, alongside some new ones.\n" +
        "- - A few other meme commands may eventually return into the slash command.\n" +
        "- __entrance__ now has a sister or opposite command, __goodbye__.\n"
        , true)

        await interaction.reply({ embeds: [ emb ] });
    },
};