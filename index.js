const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const Enmap = require("enmap")

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});










client.on('ready', () => {
  
});

client.on('message', message => {
  if (message.content === '.jerry') {
    message.channel.send("JERRY! https://m-p16.akamaized.net/img/tos-maliva-p-0068/0cppq0qvvetdbte6iphb00005144090v0200009e05~noop.image");
  }
});

client.on('message', message => {
  if (message.content === '.invite') {
    message.author.send("`Invite link:` https://discordapp.com/oauth2/authorize?client_id=565559609922682881&scope=bot&permissions=281158718");
  }
});

client.on('message', message => {
  if (message.content === '.help') {
    
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



client.login(config.token);