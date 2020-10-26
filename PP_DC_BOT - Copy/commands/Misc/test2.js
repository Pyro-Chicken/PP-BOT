const Discord = require('discord.js');
const { default_prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(message.author.id === '455808529627086848'){
    let mRole = await message.guild.roles.cache.find(role => role.name === 'Bot');

    await message.member.roles.remove(mRole)
    }else{
        message.channel.send('nope')
    }
}


module.exports.help = {
    name: "iosdfhhaaiufghasdasfdfdasaidhasiudhgsaiudh",
}