const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const pkg = require("../package.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription("Shows the changelog and version of the bot."),
	async execute(interaction) {
        const emb = new EmbedBuilder()
        .setTitle("Syntia")
        .setDescription("Version " + pkg.version)
        .setColor(0xf442aa)
        .setThumbnail(interaction.client.user.avatarURL())
        
        .addFields(
            {name: "New commands", value: 
                "- `dice`, suitable for text-based \"board game\" sessions."
            },
            {name: "Changes", value: 
                "- Updated Discord.js to " + pkg.dependencies['discord.js'] + "\n" +
                "- Updated `impostor` to use graphical capabilities of **@napi-rs/canvas**, same goes for `dice`!" + "\n" +
                "- Updated `memedispenser` to make use of the select menu." + "\n" +
                "- Removed `ping` due to... technical issues."
            }
            )

        await interaction.reply({ embeds: [ emb ] });
    },
};