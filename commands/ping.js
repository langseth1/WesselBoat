exports.run = (client, message, args) => {
    message.channel.send(`${client.ping}ms`);
}
