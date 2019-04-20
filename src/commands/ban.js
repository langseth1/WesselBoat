module.exports.run = async (client, message) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have perms :3");
     
  const user = message.mentions.users.first();

  if(user) {
    const member = message.guild.member(user);

    if (member) {
       member.ban("Bot ban.").then(() => {

        message.channel.send(`${user.tag} is banned from the guild!`);

      }).catch(err => {
        message.reply("Unable to ban (bot doesn't have perms)");
        console.error(err);
      }); 
    } else {
      message.reply("Could not ban the member. (User not in guild/Wrong mention)");
    }
  
  } else {
    message.reply("Could not ban the member. (User not in guild/Wrong mention)");
  }
}

module.exports.config = {
    name: "Help",
    aliases: ["help", "helppage"]
  
  }