const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('impostor')
		.setDescription("Was the mentioned suspect sus?")
		.addUserOption(option => option.setName("suspect").setDescription("Which is the suspect that you chose?").setRequired(true)),
	async execute(interaction) {
		try {
            var chance;
            chance = Math.floor(Math.random() * 50);
    
            let victim = interaction.options.getUser("suspect");
    
            const impostorMessages = [
                " was not An Impostor.",
                " was An Impostor."
            ]

            const impostorMessages2 = [
                "1 Impostor remains.",
                "0 Impostor remains."
            ]

            const applyText = (canvas, text, maxfontsize) => {
                const context = canvas.getContext('2d');
            
                // Declare a base size of the font
                let fontSize = maxfontsize;
            
                do {
                    // Assign the font to the context and decrement it so it can be measured again
                    context.font = `${fontSize -= 5}px sans-serif`;
                    // Compare pixel width of the text to the canvas minus the approximate avatar size
                } while (context.measureText(text).width > canvas.width / 1.3);
            
                // Return the result to use in the actual canvas
                return context.font;
            };
    
            let sel
    
            if(chance == 50) {
                sel = 0
                console.log(victim.username + " is sus.\nChance: " + chance)
            }
    
            else {
                sel = 1
                console.log(victim.username + " is not sus.\nChance: " + chance)
            }

            console.log("Selection: " + sel);

            const canvas = Canvas.createCanvas(600, 300);
            const context = canvas.getContext("2d");

            const amogus = await Canvas.loadImage('./canvas/amogus.png');
            const bg = await Canvas.loadImage('./canvas/space.png')

            context.drawImage(bg, 0, 0);

            if(sel = 0) {
                context.drawImage(amogus, 500, 115);
            }

            context.font = applyText(canvas, victim.username + impostorMessages[sel], 50);
            context.textAlign = "center";
            context.fillStyle = '#ffffff';
            context.fillText(victim.username + impostorMessages[sel], canvas.width / 2, canvas.height / 2.2);

            context.font = applyText(canvas, impostorMessages2[sel], 30);
            context.textAlign = "center";
            context.fillStyle = '#ffffff';
            context.fillText(impostorMessages2[sel], canvas.width / 2, canvas.height / 1.8);

            const att = await new AttachmentBuilder(canvas.toBuffer("image/png"), { name: "impostor.png"});
    
            await interaction.reply({
                files: [att]
            })
            }

        catch (e) {
            await interaction.reply({content: "I don't think that's gonna work. 🤦‍♂️\n```" + e + "```", ephemeral: true})
        }
    },
};