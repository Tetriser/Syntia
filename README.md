# Syntia
A multi-functional Discord bot made specifically for Tetriser's Realm Discord server.

## Setting up
### Discord.js
Discord.js is already equipped in this repository. However, you can update the library by:
1. Run `npm uninstall discord.js` from your terminal / command prompt inside the root folder.
2. Do the same but replace `uninstall` with `install`.

### Configuration file (config.json)
In this repository, you'll notice that the `config.json` file has blank entries, you will need to fill them all.

* `token` - The token for the bot to connect to Discord. You can get your token by creating an application in your [Discord Developer Portal](https://discord.com/developers), then you can copy the token from your app's **Bot** page.
* `welcomeChannelID` - The channel ID for the bot to send user arrivals and departure messages. Said channel requires the bot to have the *Send Messages* permission.