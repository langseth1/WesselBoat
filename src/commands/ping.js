module.exports.run = async (client, message) => {
  const m = await message.channel.send("Ping?");
  m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}

module.exports.config = {
  name: "Help",
  aliases: ["help", "helppage"]

}