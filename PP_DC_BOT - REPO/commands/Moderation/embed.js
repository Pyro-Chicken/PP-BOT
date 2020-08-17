const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send("You do not have access to this command!")
    return
}else{
    const slots = args.join(" ").split(" | ");

    let e = new Discord.MessageEmbed()
        .setTitle(slots[0])
        .setDescription(slots[1])
        .setColor(slots[2])
        .setTimestamp()
        .setFooter(`Made by: ${message.author.username}`)

    message.channel.send(e)

    message.delete();
}
}


module.exports.help = {
    name: "embed",
}