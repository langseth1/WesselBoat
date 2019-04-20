module.exports.run = async (client, message) => {
    message.channel.send("Workin'")
}

module.exports.config = {
    name: "Help",
    aliases: ["help", "helppage"]
  
  }