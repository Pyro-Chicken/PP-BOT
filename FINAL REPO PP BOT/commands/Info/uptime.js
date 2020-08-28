const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {


    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptimeEmbed = new Discord.MessageEmbed()
        .setTitle(`${bot.user.tag}'s Uptime`)
        .setDescription(`${bot.user.tag} has been up and running for:`)
        .addField('Days:', days)
        .addField('Hours:', hours)
        .addField('Minutes:', minutes)
        .addField('Seconds:', seconds)
        .setColor(lime)

    message.channel.send(uptimeEmbed)
}


module.exports.help = {
    name: "uptime",

}