const Discord = require('discord.js')

module.exports = {
  name: "quote",
  requireArgument: true,
  ownerOnly: false,
  modsOnly: false,
  server: true,
  description: "Show your quotes in a fancy box.",
  syntax: "<your message>",
  execute(message, args) {
    let q = args.slice(0).join(" ")
    const embed = new Discord.MessageEmbed()
      .setTitle(message.author.username)
      .setDescription('"' + q + '"')
      .setThumbnail(message.author.avatarURL)
      .setFooter(new Date())
      .setColor(message.member.displayColor)

    message.channel.send(embed);
  }
}