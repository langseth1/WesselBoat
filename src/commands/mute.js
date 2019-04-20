module.exports.run = async (client, message) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have perms :3");
     
  const user = message.mentions.users.first();
  const muted = message.guild.roles.find('name', 'muted');

  if(user) {
    const member = message.guild.member(user);

    if (member) {
       member.addRole(muted).then(() => {

        message.channel.send(`${user.tag} is now muted.`);

      }).catch(err => {
        message.reply("Unable to mute (bot doesn't have perms)");
        console.error(err);
      }); 
    } else {
      message.reply("Could not mute the member. (User not in guild/Wrong mention)");
    }
  
  } else {
    message.reply("Could not mute the member. (User not in guild/Wrong mention)");
  }
}

module.exports.config = {
    name: "Mute",
    aliases: ["mute", "mutecommand"]
  
}