module.exports.run = async (client, message, args) => {
    message.channel.send(`Bot has been on for ${client.uptime}ms!`);
}

module.exports.config = {
    name: "Help",
    aliases: ["help", "helppage"]
  
  }