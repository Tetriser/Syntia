const Discord = require('discord.js');
const config = require('../config.json');
const botlog = config.botlog;

exports.run = (client, message) =>
{
  try
  {
    {
      if (!client.channels.get(botlog)) return;

      if (!config.logDeletion) return;

      if (message.content.length > 1000) return;

      em = new Discord.MessageEmbed();
      em.setTitle("Deleted message fetched 🗑")
      em.addField("Author", message.author.username)
      
      if (message.content.length !== 0)
      {
        em.addField("Content:", message.content, false);
      }
      
      em.addField("Channel:", message.channel.name, false)
      em.setColor(0xFF2000)
      em.setFooter("Deleted at " + new Date());

      client.channels.get(botlog).send(em).catch(console.error);

    };
  }
  catch (e)
  {
    console.error(e);
  }
}