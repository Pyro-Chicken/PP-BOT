const Discord = require('discord.js');
const { prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')




module.exports.run = async (bot, message, args) => {

let rate = Math.floor(Math.random() * 101);

if(!args[0]){
    message.channel.send(`I would rate you a ${rate}/100          -_-`)
}else {
    let user = message.mentions.users.first();
    if (!user){
        return message.channel.send("Incorrect syntax! Either use **'+rate'** or **'+rate <@user>'**!")

    }
    return message.channel.send(`I would rate ${user.username} a ${rate}/100          -_-`)
}
}


module.exports.help = {
    name: "rate",
}