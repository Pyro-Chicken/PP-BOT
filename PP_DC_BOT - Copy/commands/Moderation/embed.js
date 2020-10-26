const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

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
        // console.log(slots[2])

    message.channel.send(e)

    message.delete();



}

}


module.exports.help = {
    name: "embed",
}



