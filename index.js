const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} \n Type "check" in any txt channel to check if boat works!`);
  client.user.setActivity(`.help | On ${client.guilds.size} Server`);
});

client.on('message', message => {
  if (message.content === 'check') {
    message.channel.send("Workin'");
  }
});

client.on('message', message => {
  if (message.content === '.jerry') {
    message.channel.send("JERRY! https://m-p16.akamaized.net/img/tos-maliva-p-0068/0cppq0qvvetdbte6iphb00005144090v0200009e05~noop.image");
  }
});

client.on('message', message => {
  if (message.content === '.help') {
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
          value: "`check` | Check if boat is working."
        },
        {
          name: "Admin/Mod Commands",
          value: "`kick` | Kicks the member from the server. \n `ban` | Bans the spesified member. \n `mute`/`unmute` | Mutes/Unmutes the spesified member."
        },
        {
          name: "Images Commands",
          value: "`jerry` | Sends picture of jerry."
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
});

client.on("message", message => {
  if(!message.guild);
  if(message.content.startsWith(".send")) {
    if(!message.author.id("222002405670256641")) return message.channel.send("You don't have perms :3");
     
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
});

client.on("message", message => {
  if(!message.guild);
  if(message.content.startsWith(".mute")) {
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
});

client.on("message", message => {
  if(!message.guild);
  if(message.content.startsWith(".unmute")) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have perms :3");
     
    const user = message.mentions.users.first();
    const muted = message.guild.roles.find('name', 'muted');

    if(user) {
      const member = message.guild.member(user);

      if (member) {
         member.removeRole(muted).then(() => {

          message.channel.send(`${user.tag} is now unmuted.`);

        }).catch(err => {
          message.reply("Unable to unmute (bot doesn't have perms)");
          console.error(err);
        }); 
      } else {
        message.reply("Could not unmute the member. (User not in guild/Wrong mention)");
      }
    
    } else {
      message.reply("Could not unmute the member. (User not in guild/Wrong mention)");
    }
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
        message.reply("Could not kick the member. (User not in guild/Wrong mention)");
      }
    
    } else {
      message.reply("Could not kick the member. (User not in guild/Wrong mention)");
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