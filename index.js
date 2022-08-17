const {Client, Intents, Collection} = require("discord.js");
const fs = require("fs");
const { config } = require("process");
const { token, welcomeChannelID } = require("./config.json");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
})
client.commands = new Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const commandFile = require(`./commands/${file}`);
    client.commands.set(commandFile.data.name, commandFile);
    console.log("Added " + commandFile.data.name + " into the command directory.");
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try
    {
		await command.execute(interaction);
	}
    
    catch (error)
    {
		console.error(error);
		await interaction.reply
        (
            {
                content: "There\'s an issue with the command, sorry about that.\n```\n" + error + "```", ephemeral: true
            }
        );
	}
});

client.on('messageCreate', message => {
	if(message.author.bot) {
		return;
	}

	const args = message.content.split(/ +/g);
	if(args[0] == ">say") {
		if(message.mentions.channels.size == 0) {
			console.log("No channels are provided!");
			return;
		}

		const msg = args.slice(2).join(" ");
		message.guild.channels.cache.get(message.mentions.channels.first().id)
		.send(msg);
	}
});

client.on('guildMemberAdd', member => {
	member.guild.channels.cache.get(welcomeChannelID)
	.send("<@" + member.id + "> has arrived! Open the gates!");
});

client.on('guildMemberRemove', member => {
	member.guild.channels.cache.get(welcomeChannelID)
	.send("**" + member.user.username + "** left the realm.");
});

client.login(token);