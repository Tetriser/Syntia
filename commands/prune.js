const Discord = require("discord.js")

module.exports = {
    name: "prune",
    aliases: ["clear", "remove"],
    requireArgument: true,
    ownerOnly: false,
    modsOnly: true,
    cooldown: 5,
    description: 'Deletes selected number of messages, excluding those that are over 2 weeks ago.',
    execute(message, args) {
        let number = args[0];
        try {
            if (number > 2 && number <= 50) {
                message.channel.bulkDelete(number, true);
                message.channel.send("Done!")
                .then(msg => {
                    msg.delete({timeout: 5000});
                })
                .catch(error => {
                    console.log(error);
                })
            }
        
            else {
                message.channel.send("Please enter a number in between 2 and 50.")
            }    
        }
    
        catch (e) {
            message.channel.send("Some messages could not be deleted.")
            console.log(e);
        }
    
    },
}