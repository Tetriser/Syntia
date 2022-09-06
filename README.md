# Syntia
A multi-functional Discord bot made specifically for Tetriser's Realm Discord server.

## Requirements
* Node v16.17.0+
* Knowledge of JavaScript and by extension, Discord.js

## Setting up
1. Install Node to your system. Make sure NPM is also installed.
2. Run `npm install` inside the bot's root folder through your system's terminal to install the required modules to run the bot.
3. Once that's done, make sure your `config.json` is filled. See the next section below.
4. Then, run `node deploy-commands.js`. This will distribute the commands inside the `commands` folder as slash commands in Discord.
5. Finally, run `node index.js` to start the bot up.
6. You're done! Now what's left to do is to modify the bot's commands to your liking and even create some new ones. In case you need a bit of help, the `commandtemplate.js` file can be your starting point.

### Configuration file (config.json)
In this repository, you'll notice that the `config.json` file has blank entries, you will need to fill them all.

* `token` - The token for the bot to connect to Discord. You can get your token by creating an application in your [Discord Developer Portal](https://discord.com/developers), then you can copy the token from your app's **Bot** page.
* `clientID` - Required for running `deploy-commands.js`. This is your bot's client ID, which you can obtain from the Developer Portal through the **OAuth2** page.
* `guildID` - Also required for running `deploy-commands.js`. This is your server's ID.
* `welcomeChannelID` - The channel ID for the bot to send user arrivals and departure messages. Said channel requires the bot to have the *Send Messages* permission.

#### You might be askin', how the HECK can I copy the channel and guild / server IDs???
It's easy, my friend. 😁 Say, you're using your desktop, right-click your chosen channel and the server icon and select **Copy ID** to copy the ID of the channel and server, respectively.