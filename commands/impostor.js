const Discord = require('discord.js');

module.exports = {
    name: "impostor",
    aliases: ["imposter", "sus"],
    requireArgument: true,
    ownerOnly: false,
    modsOnly: false,
    server: true,
    description: "Was the mentioned member sus?",
    syntax: "<user mention>",
    execute(message, args) {
        try {
            var chance;
            chance = Math.floor(Math.random() * 50);
    
            let victim = message.mentions.users.first();
    
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
    
            message.channel.send(victim.username + impostorMessages[sel]);
            }

        catch (e) {
            message.channel.send("I don't think that's gonna work. 🤦‍♂️")
        }
    }
}