module.exports.run = async (client, message) => {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "Wessel Boat's Help Page",
          icon_url: client.user.avatarURL
        },
        title: "Prefix = `.`",
        description: "Made by: [fox#7345](https://discord.gg/D2WwvJd)",
        fields: [{
            name: "Normal Commands",
            value: "`check` | Check if boat is working. \n `jerry` | Sends picture of jerry. \n `eightball` | Answers your thought."
          },
          {
            name: "Admin/Mod Commands",
            value: "`kick` | Kicks the member from the server. \n `ban` | Bans the spesified member. \n `mute`/`unmute` | Mutes/Unmutes the spesified member."
          },
          {
            name: "Useful Commands",
            value: "`invite` | Sends you invite link for the bot in dms. \n `uptime` | Shows the bots uptime. \n `emojis` | Displays a list of unicode emojis. \n `ping` | Displays the bots ping."
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