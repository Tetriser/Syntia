const Discord = require("discord.js");
const fs = require("fs");
const {prefix, token, ownerID, modID} = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const commandFile = require(`./commands/${file}`);
    client.commands.set(commandFile.name, commandFile, commandFile.category);
    console.log("Added " + commandFile.name + " into the command directory.");
}

client.once('ready', () => {
	console.log("I'm ready!");
    console.log("Avatar: " + client.user.avatarURL())
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if(!command) {
        return;
    }
    
    if(command.ownerOnly && message.author.id != ownerID){
        return message.reply("only my owner can use that command. ❌")
    }

    if(command.server && message.channel.type == "dm"){
        return message.reply("you cannot use that command in DMs. ✋")
    }

    if (command.modsOnly && !message.member.roles.cache.get(modID)) {
        return message.reply("only moderators can use that command. 🚫")
    }

    let mn = message.mentions.users.first()

    if(mn){
        console.log(mn.username + " has been mentioned.")
    }

    if(command.requireArgument && !args.length){
        return;
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply("please calm down! You can use `" + command.name + "` again in " + timeLeft + "seconds.")
        }
    }

	try {
		command.execute(message, args);
    }
    
    catch (error) {
		console.error(error);
        message.channel.send("There seems to be a problem processing that command, sorry about that...\n\n"
        + "```\n" + error + "\n```");
	}
});

client.login(token);