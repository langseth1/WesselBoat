module.exports.run = async (client, message) => {
    message.author.send("`Invite link:` https://discordapp.com/oauth2/authorize?client_id=565559609922682881&scope=bot&permissions=281158718");
}

module.exports.config = {
    name: "Invite",
    aliases: ["invite", "invitelink"]
  
  }