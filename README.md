# Syntia
A multi-functional Discord bot made specifically for Tetriser's Realm Discord.

## Setting up
### Discord.js
Discord.js is already equipped in this repository. However, you can update the library by:
1. Run `npm uninstall discord.js` from your terminal / command prompt inside the root folder.
2. Do the same but replace `uninstall` with `install`.

### Configuration file (config.json)
In this repository, you'll notice that the `config.json` file is almost empty, you will need to fill the blanks.

* `prefix` - The name is self-explanatory, the string you need to enter first before entering the command you desire.
	* Default: `s!`
* `token` - The token for the bot to connect to Discord. You can get your token by creating an application in your [Discord Developer Portal](https://discord.com/developers), then you can copy the token from your app's **Bot** page.
* `ownerID` - Copy your ID by using the **Copy ID** menu item (accessible by enabling **Developer Mode** in your Discord client) when you right-click on your name in the member or message list. Then paste it here.
* `modID` - Copy the ID of the moderator role by right-clicking it in the role list in your server's role settings and selecting **Copy ID**, then paste into the empty string.
* `botlog` - The channel ID where the bot logs moderation actions such as ban, kick, message deletion, etc.
	* This is currently unused by any provided commands for now.