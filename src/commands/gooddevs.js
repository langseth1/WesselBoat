const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
    const gdl = [
        "Derpy (ohlookitsderpy) Github: https://github.com/ohlookitsderpy (thanks for the help man <3 -fox)",
        "Wessel (PassTheWessel, Wesselgame) Github: https://github.com/passthewessel"
    ]

    message.channel.send(gdl);
}