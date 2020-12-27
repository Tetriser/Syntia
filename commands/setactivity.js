const Discord = require("discord.js");

module.exports = {
  name: "setactivity",
  requireArgument: true,
  ownerOnly: true,
  modsOnly: false,
  server: false,
  description: "Set the bot's activity.",
  syntax: "<PLAYING / STREAMING / LISTENING / WATCHING> <game>",
  execute(message, args) {
    let s = args[0]
    let g = args.slice(1).join(" ")

    message.client.user.setActivity(g, { type: s })
      .catch(error => {
        console.log(error)
      })
  }
}