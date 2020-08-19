const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

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







