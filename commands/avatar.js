const Discord = require('discord.js');

module.exports.run = async (client, message) => {
  const wumpusking = client.emojis.find(emoji => emoji.name === "WumpusKing");
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL, "WesselBoats Help Page")
  .setTitle("WesselBoats Help Page")

module.exports.config = {
    name: "Help",
    aliases: ["help", "helppage"]
  
  }