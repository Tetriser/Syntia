const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('impostor')
		.setDescription("Was the mentioned suspect sus?")
		.addUserOption(option => option.setName("suspect").setDescription("Which is the suspect you chose?").setRequired(true)),
	async execute(interaction) {
		try {
            var chance;
            chance = Math.floor(Math.random() * 50);
    
            let victim = interaction.options.getUser("suspect");
    
            const impostorMessages = [
                " was An Impostor.\n0 Impostor remains. ඞ 🌌",
                " was not An Impostor.\n1 Impostor remains. ඞ 🌌"
            ]
    
            let sel
    
            if(chance == 50) {
                sel = 0
                console.log(victim.username + " is sus.\nChance: " + chance)
            }
    
            else {
                sel = 1
                console.log(victim.username + " is not sus.\nChance: " + chance)
            }
    
            await interaction.reply(victim.username + impostorMessages[sel]);
            }

        catch (e) {
            await interaction.reply({content: "I don't think that's gonna work. 🤦‍♂️", ephemeral: true})
        }
    },
};