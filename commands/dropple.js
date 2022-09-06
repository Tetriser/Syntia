const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dropple')
        .setDescription("Say hello to one of the Dropples in Dripsdale!")
        .addSubcommand(subcommand => subcommand.setName("smitty").setDescription("The hero in blue himself."))
        .addSubcommand(subcommand => subcommand.setName("milly").setDescription("Smitty's beloved cousin."))
        .addSubcommand(subcommand => subcommand.setName("mimi").setDescription("Smitty's beloved little sister."))
        .addSubcommand(subcommand => subcommand.setName("sally").setDescription("Smitty's older sister."))
        .addSubcommand(subcommand => subcommand.setName("samuel").setDescription("Smitty's older brother."))
        .addSubcommand(subcommand => subcommand.setName("profdrips").setDescription("Professor Drips, the prestigeous professor himself."))
        ,
    async execute(interaction) {
        var greet;
        var img;

        switch (interaction.options.getSubcommand()) {
            case "smitty":
                greet = "Hello!";
                img = "https://cdn.discordapp.com/attachments/433608545158823937/921295582163771422/Smitty-Full.png";
                break;
            case "milly":
                greet = "Hi!";
                img = "https://cdn.discordapp.com/attachments/433608545158823937/921295582381887498/Milly-Full.png";
                break;
            case "mimi":
                greet = "H-hello...?";
                img = "https://cdn.discordapp.com/attachments/433608545158823937/921295582646136862/Mimi-Full.png";
                break;
            case "sally":
                greet = "Hey there!";
                img = "https://cdn.discordapp.com/attachments/433608545158823937/921295582839058472/Sally-Full.png";
                break;
            case "samuel":
                greet = "Wassup?";
                img = "https://cdn.discordapp.com/attachments/433608545158823937/921295583027814480/Samuel-Full.png";
                break;
            case "profdrips":
                greet = "Nice to meet you.";
                img = "https://cdn.discordapp.com/attachments/433608545158823937/921297770260889620/Drips-Full.png";
                break;
        }
    
        emb = new EmbedBuilder()
        .setTitle(greet)
        .setImage(img)

        await interaction.reply({ embeds: [emb] });

    }
};