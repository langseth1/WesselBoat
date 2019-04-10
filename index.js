const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} \n Type "check" in any txt channel to check if boat works!`);
});

client.on('message', message => {
  if (message.content === 'check') {
    message.channel.send("Workin'");
  }
});


client.on("message", message => {
  if(!message.guild);
  if(message.content.startsWith(".kick")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have perms :3");
     
    const user = message.mentions.users.first();

    if(user) {
      const member = message.guild.member(user);

      if (member) {
         member.kick("Optional reason -> Audit Log.").then(() => {

          message.channel.send(`${user.tag} is kicked from the guild!`);

        }).catch(err => {
          message.reply("Unable to kick (bot doesn't have perms)");
          console.error(err);
        }); 
      } else {
        message.reply("Could not kick the member. (User not in guild/Wrong mention");
      }
    
    } else {
      message.reply("Could not kick the member. (User not in guild/Wrong mention");
    }
  }
});

client.on("message", message => {
  if(!message.guild);
  if(message.content.startsWith(".ban")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have perms :3");
     
    const user = message.mentions.users.first();

    if(user) {
      const member = message.guild.member(user);

      if (member) {
         member.ban("Optional reason -> Audit Log.").then(() => {

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
});

client.login("");