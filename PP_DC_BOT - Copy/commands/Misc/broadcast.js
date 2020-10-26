const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    var guildList = bot.guilds.toArray();
    try {

        guildList.forEach(guild => 
            guild.channels.cache.find(c => c.type === 'text').send(args.join(" ")));
    } catch (err) {
        console.log("Could not send message to " + guild.name);
    }
 

}


module.exports.help = {
    name: "O-broadcast",
}