/* 
______                _              __          
|  ___|              (_)            / _|         
| |_ _   _ _ __ _   _ _ _ __   __ _| |_ _____  __
|  _| | | | '__| | | | | '_ \ / _` |  _/ _ \ \/ /
| | | |_| | |  | |_| | | | | | (_| | || (_) >  < 
\_|  \__,_|_|   \__, |_|_| |_|\__, |_| \___/_/\_\
                 __/ |         __/ |             
                |___/         |___/              
Name: WesselBoat made by Furyingfox.             
Github: FuryingFox
Discord: fox#7345
License: MIT | USE WITH RIGHT CREDENTIALS.
(KEEP THIS SIGNATURE HERE IF YOU USE THE CODE)
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const Enmap = require("enmap")

//Grabs Events
client.config = config;
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//Grabs Commands
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

client.login(config.token);