module.exports = {
    name: "reload",
    requireArgument: true,
    ownerOnly: true,
    description: 'Reloads the command from the JS file.',
    syntax: '<message>',
    execute(message, args) {
        const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`Cannot find the JS file for \`` + commandName + `\`. 😕`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` has been successfully reloaded! ♻`);
		} catch (error) {
			console.error(error);
			message.channel.send(`There seems to be a problem while I'm reloading that command:\n\`\`\`${error.message}\`\`\``);
		}
    },
}