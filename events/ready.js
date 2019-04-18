module.exports = (client, message) => {
    console.log(`Logged in as ${client.user.tag} \n Type "check" in any txt channel to check if boat works! \n in ${client.guilds.size} guilds!`);
    client.user.setActivity(`.help | On ${client.guilds.size} Server`);
}    
    