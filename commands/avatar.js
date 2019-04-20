const Discord = require('discord.js');

module.exports.run = async (client, message) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Emoji's 😜",
    description: "A list of all emojis in the unicode library.",
    fields: [{
        name: "[Face Emojis]()",
      },
      {
        name: "Admin/Mod Commands",
        value: "`kick` | Kicks the member from the server. \n `ban` | Bans the spesified member. \n `mute`/`unmute` | Mutes/Unmutes the spesified member."
      },
      {
        name: "Useful Commands",
        value: "`invite` | Sends you invite link for the bot in dms. \n `uptime` | Shows the bots uptime. \n `emoji` | Displays a list of emojis. \n `ping` | Displays the bots ping."
      },
      {
        name: "Developer Commands",
        value: "`send` | Sends message to spesified user."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: client.user.username
    }
  }
});
}

module.exports.config = {
    name: "Help",
    aliases: ["help", "helppage"]
  
}