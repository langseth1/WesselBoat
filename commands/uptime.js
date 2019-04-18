exports.run = (client, message, args) => {
    message.channel.send(`Bot has been on for ${client.uptime}ms!`);
}