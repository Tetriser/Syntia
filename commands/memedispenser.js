const { SlashCommandBuilder, EmbedBuilder, SelectMenuBuilder, ActionRowBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('memedispenser')
        .setDescription("Memes! A lot of memes!"),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .setComponents(
                new SelectMenuBuilder()
                    .setCustomId("meme")
                    .setPlaceholder("No meme selected")
                    .addOptions(
                        {
                            label: "Bayoen Them Kneecaps",
                            description: "Beware, your cursed and unholy content may lead to consequences.",
                            value: "bayoenthemkneecaps"
                        },
                        {
                            label: "Get Real",
                            description: "What the heck is going on?",
                            value: "getreal"
                        },
                        {
                            label: "Here We Go Again",
                            description: "\"Ah 💩💩💩💩, here we go again.\" - Carl Johnson, Grand Theft Auto: San Andreas",
                            value: "herewegoagain"
                        },
                        {
                            label: "Man",
                            description: "What do you expect from this description?",
                            value: "man"
                        },
                        {
                            label: "Oof",
                            description: "Oof? I thought it was \"uuhhh\"? R.I.P. \"uuhhh.mp3\" (2004?-2022)",
                            value: "oof"
                        },
                        {
                            label: "It was rated R!",
                            description: "Why couldn't the 11 year old get into the pirate movie?",
                            value: "arr"
                        },
                        {
                            label: "Source Engine Error Model in Real Life",
                            description: "If you play Garry's Mod, you'll understand the joke.",
                            value: "sourceerror"
                        },
                        {
                            label: "Watch Out!",
                            description: "Tetris 99 but YOU are the target.",
                            value: "watchout"
                        },
                        {
                            label: "Speen~",
                            description: "You spin me right round baby right round like a record baby.",
                            value: "speen"
                        },
                        {
                            label: "Thumbs Up!",
                            description: "Have some thumbs up.",
                            value: "thumbsup"
                        },
                        {
                            label: "Panda Rage",
                            description: "Unleash your overfilling rage.",
                            value: "rage"
                        },
                        {
                            label: "Water and Water and Water Water",
                            description: "A parody based of a music from a Final Fantasy game, it's funny.",
                            value: "water"
                        },
                        {
                            label: "Cosmo Shouts at Timmy",
                            description: "Cosmo from The Fairly OddParents.",
                            value: "cosmo"
                        },
                        {
                            label: "Nope",
                            description: "Engineer responds.",
                            value: "nope"
                        }
                    )
            )

        const m = await interaction.reply(
            {
                content: "Choose your meme!",
                components: [row],
                fetchReply: true
            }
        )

        const collector = m.createMessageComponentCollector({ componentType: ComponentType.SelectMenu, time: 15000 })

        collector.on('collect', i => {
            const rs = i.values[0]

            const emb = new EmbedBuilder()

            switch (rs) {
                case "bayoenthemkneecaps":
                    interaction.editReply(
                        {
                            content: "https://cdn.discordapp.com/attachments/433608545158823937/636089280556564491/image0.jpg",
                            components: []
                        }
                    )
                    return

                case "getreal":
                    var grimages = [
                        'https://c.tenor.com/b6M5YEfRVT0AAAAM/unable-to-get-real-inability-to-get-real.gif',
                        'https://c.tenor.com/-Vo0WyLGmXoAAAAM/getreal-rodrick.gif',
                        'https://c.tenor.com/LzEPeJiu7esAAAAC/sonic-the-hedgehog-sonic.gif',
                        'https://c.tenor.com/d6XZhVcT1x4AAAAC/get-real-cat.gif',
                        'https://c.tenor.com/G9ukzOqtk9MAAAAC/get-real-cats.gif',
                        'https://c.tenor.com/0LIEs1v5yXUAAAAM/getreal.gif',
                        'https://c.tenor.com/jc-ihvl0aqAAAAAd/get-real-get-fake.gif',
                        'https://c.tenor.com/S4RIkQMtNuEAAAAC/get-real-funny.gif',
                        'https://c.tenor.com/M5eHwNqZ4ioAAAAd/crack-pacman-get-real.gif',
                        'https://c.tenor.com/w0EFXuXlP8IAAAAC/get-real-get-real-gaganam-stylke.gif',
                        'https://c.tenor.com/8soX2vVxLAkAAAAM/godzilla-get-real-get-real.gif',
                        'https://c.tenor.com/cgGmDPcvk90AAAAM/get-real.gif'
                    ]

                    var whee;

                    whee = Math.floor(Math.random() * grimages.length)

                    emb.setImage(grimages[whee])

                    if (whee == 0) {
                        emb.setTitle("Try again mate...");
                    }

                    interaction.editReply({
                        content: "",
                        embeds: [emb],
                        components: []
                    })
                    return

                case "herewegoagain":
                    interaction.editReply(
                        {
                            content: "https://c.tenor.com/uglc4UgNVrQAAAAd/ah-shit-here-we-go-again-gta.gif",
                            components: []
                        }
                    )
                    return

                case "man":
                    interaction.editReply(
                        {
                            content: "https://cdn.discordapp.com/attachments/433608545158823937/726251031410901042/grlfctfhxam41.png",
                            components: []
                        }
                    )
                    return

                case "oof":
                    interaction.editReply(
                        {
                            content: "https://cdn.discordapp.com/attachments/433608545158823937/433655634068504577/20a009334aa3c21b0540945568cca0a3.png",
                            components: []
                        }
                    )
                    return

                case "arr":
                    emb
                        .setTitle('It was rated R!')
                        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/433608739799564288/r-posting.png')

                    interaction.editReply(
                        {
                            content: "",
                            embeds: [emb],
                            components: []
                        }
                    )
                    return

                case "sourceerror":
                    emb
                        .setTitle('You forgot to install Counter-Strike: Source, fam.')
                        .setImage('https://cdn.discordapp.com/attachments/433608545158823937/464831976386461726/error.jpg')

                    interaction.editReply(
                        {
                            content: "",
                            embeds: [emb],
                            components: []
                        }
                    )
                    return

                case "watchout":
                    interaction.editReply(
                        {
                            content: "https://cdn.discordapp.com/attachments/433608545158823937/552719023482208277/unknown.png",
                            components: []
                        }
                    )
                    return

                case "speen":
                    var speenImgs = [
                        'https://cdn.discordapp.com/attachments/361763227299741698/662516656408363018/562396716775505941.gif',
                        'https://c.tenor.com/d5JQuMQj3gUAAAAM/speens-spin.gif',
                        'https://cdn.discordapp.com/attachments/361763227299741698/662517750262005771/417702898625937408.gif',
                        'https://c.tenor.com/tqGn6RGF4aYAAAAM/pisos-bang.gif',
                        'https://c.tenor.com/UfxlmZW-CWgAAAAM/speen.gif',
                        'https://c.tenor.com/d3p7P6BUDfAAAAAM/gir-invader-zim.gif',
                        'https://c.tenor.com/roV1Rdz5prEAAAAM/touhou-touhou-spin.gif',
                        'https://c.tenor.com/6V6NnQeEqUsAAAAd/menor69-speen.gif',
                        'https://c.tenor.com/psWouxzFjj0AAAAC/puyo-puyo-witch.gif',
                        'https://c.tenor.com/Sw-5iG8dZRMAAAAC/obsiddi-spin.gif',
                        'https://c.tenor.com/d5JQuMQj3gUAAAAM/speens-spin.gif',
                        'https://c.tenor.com/eDnQA6U63xcAAAAM/starcraft-spin.gif'
                        ];
            
                    var speen;
            
                    speen = Math.floor(Math.random() * speenImgs.length);
            
                    emb.setTitle('Speen!').setImage(speenImgs[speen])
    
                    interaction.editReply({
                        content: "",
                        embeds: [emb],
                        components: []
                    });
                    return

                case "thumbsup":
                    interaction.editReply(
                        {
                            content: "https://cdn.discordapp.com/attachments/433608545158823937/827069642798399488/iu.png",
                            components: []
                        }
                    )
                    return

                case "rage":
                    interaction.editReply(
                        {
                            content: "https://c.tenor.com/aaNYnbPvf4IAAAAC/angry-panda.gif",
                            components: []
                        }
                    )
                    return

                case "water":
                    interaction.editReply(
                        {
                            content: "https://www.youtube.com/watch?v=vKhHwpkL17o",
                            components: []
                        }
                    )
                    return

                case "cosmo":
                    interaction.editReply(
                        {
                            content: "https://tenor.com/view/fairly-odd-parents-meme-cosmos-timmy-wanda-gif-25405522",
                            components: []
                        }
                    )
                    return

                case "nope":
                    interaction.editReply(
                        {
                            content: "https://cdn.discordapp.com/attachments/433608545158823937/464424004548296704/flat550x550075f.png",
                            components: []
                        }
                    )
                    return
            }
        })
    }
};