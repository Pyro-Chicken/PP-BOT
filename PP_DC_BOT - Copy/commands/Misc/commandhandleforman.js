const Discord = require('discord.js');
const { default_prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
//commands go on here

}


module.exports.help = {
    name: "iosdfhhaaiufghasdasfdfdasaidhasiudhgsaiudh",
}