const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('memedispenser')
        .setDescription("Memes! A lot of memes!")
        .addSubcommand(subcommand => subcommand.setName("bayoenthemkneecaps").setDescription("Beware, your cursed and unholy content may lead to consequences."))
        .addSubcommand(subcommand => subcommand.setName("getreal").setDescription("What the heck is going on?"))
        .addSubcommand(subcommand => subcommand.setName("herewegoagain").setDescription("\"Ah 💩💩💩💩, here we go again.\" - Carl Johnson, Grand Theft Auto: San Andreas"))
        .addSubcommand(subcommand => subcommand.setName("man").setDescription("What do you expect from this description?"))
        .addSubcommand(subcommand => subcommand.setName("oof").setDescription("Oof? I thought it was \"uuhhh\"?"))
        .addSubcommand(subcommand => subcommand.setName("arr").setDescription("Why couldn't the 11 year old get into the pirate movie?"))
        .addSubcommand(subcommand => subcommand.setName("sourceerror").setDescription("If you play Garry's Mod, you'll understand the joke."))
        .addSubcommand(subcommand => subcommand.setName("watchout").setDescription("Tetris 99 but YOU are the target."))
        .addSubcommand(subcommand => subcommand.setName("speen").setDescription("You spin me right round baby right round like a record baby."))
        .addSubcommand(subcommand => subcommand.setName("thumbsup").setDescription("Have some thumbs up."))
        .addSubcommand(subcommand => subcommand.setName("rage").setDescription("Unleash your overfilling rage."))
        .addSubcommand(subcommand => subcommand.setName("water").setDescription("A parody based of a music from a Final Fantasy game, it's funny.")),
    async execute(interaction) {
        const emb = new EmbedBuilder()

        switch (interaction.options.getSubcommand()) {
            case "bayoenthemkneecaps":
                await interaction.reply('https://cdn.discordapp.com/attachments/433608545158823937/636089280556564491/image0.jpg');
                break;

            case "watchout":
                await interaction.reply('https://cdn.discordapp.com/attachments/433608545158823937/552719023482208277/unknown.png');
                break;

            case "herewegoagain":
                await interaction.reply('https://c.tenor.com/uglc4UgNVrQAAAAd/ah-shit-here-we-go-again-gta.gif');
                break;

            case "water":
                await interaction.reply('https://www.youtube.com/watch?v=vKhHwpkL17o');
                break;

            case "rage":
                await interaction.reply('https://c.tenor.com/aaNYnbPvf4IAAAAC/angry-panda.gif');
                break;

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

                if(whee == 0){
                    emb.setTitle("Try again mate...");
                }

                await interaction.reply({ embeds: [emb] });
                break;

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

                await interaction.reply({ embeds: [emb] });
                break;

            case "arr":
                emb
                .setTitle('It was rated R!')
                .setImage('https://cdn.discordapp.com/attachments/433608545158823937/433608739799564288/r-posting.png')

                await interaction.reply({ embeds: [emb] });
                break;

            case "oof":
                await interaction.reply('https://cdn.discordapp.com/attachments/433608545158823937/433655634068504577/20a009334aa3c21b0540945568cca0a3.png');
                break;

            case "man":
                await interaction.reply('https://cdn.discordapp.com/attachments/433608545158823937/726251031410901042/grlfctfhxam41.png');
                break;

            case "sourceerror":
                emb
                .setTitle('You forgot to install Counter-Strike: Source, fam.')
                .setImage('https://cdn.discordapp.com/attachments/433608545158823937/464831976386461726/error.jpg')

                await interaction.reply({ embeds: [emb] });
                break;

            case "thumbsup":
                await interaction.reply('https://cdn.discordapp.com/attachments/433608545158823937/827069642798399488/iu.png');
                break;
        }
    }
};