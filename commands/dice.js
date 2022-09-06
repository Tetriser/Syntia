const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require('discord.js')
const Canvas = require('@napi-rs/canvas')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription("Roll some dice."),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .setComponents([
                new ButtonBuilder()
                    .setLabel("1 Die")
                    .setCustomId("one")
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setLabel("2 Dice")
                    .setCustomId("two")
                    .setStyle(ButtonStyle.Secondary)
            ]
            )

        var faces = [
            "./canvas/1.png",
            "./canvas/2.png",
            "./canvas/3.png",
            "./canvas/4.png",
            "./canvas/5.png",
            "./canvas/6.png"
        ]

        var num1 = Math.floor(Math.random() * 6);
        var num2 = Math.floor(Math.random() * 6);

        console.log("Dice rolled: " + num1 + ", " + num2)

        const canvas = Canvas.createCanvas(700, 400)
        const context = canvas.getContext("2d")

        const bg = await Canvas.loadImage("./canvas/dice-bg.png")
        const face1 = await Canvas.loadImage(faces[num1])
        const face2 = await Canvas.loadImage(faces[num2])

        const m = await interaction.reply({
            content: "How many dice you want to use?",
            components: [row]
        })

        const collector = m.createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 15000
        })

        collector.on('collect', i => {
            if (i.customId == "one") {
                context.drawImage(bg, 0, 0)
                context.drawImage(face1, 250, 100)
                const att = canvas.toBuffer("image/png", { name: "diceroll.png" })

                interaction.editReply({
                    content: "You rolled: **" + (num1 + 1) + "**",
                    files: [att],
                    components: []
                })
            }

            if (i.customId == "two") {

                context.drawImage(bg, 0, 0)
                context.drawImage(face1, 100, 100)
                context.drawImage(face2, 400, 100)
                const att = canvas.toBuffer("image/png", { name: "diceroll.png" })


                interaction.editReply({
                    content: "You rolled: **" + ((num1 + 1) + (num2 + 1)) + "** (" + (num1 + 1) + ", " + (num2 + 1) + ")",
                    files: [att],
                    components: []
                })
            }
        })
    },
};