const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(message.member.hasPermission("ADMINISTRATOR")){
        console.log(`
Categtories:
        ---------------
        |✅|Moderation|
        |✅|   Info   |
        |✅|   Fun    |
        |✅|  Music   |
        ---------------
    
        `);
    }else{
        message.channel.send("You Don't Have Sufficient Permissions!")
    };

}


module.exports.help = {
    name: "Category",
}







