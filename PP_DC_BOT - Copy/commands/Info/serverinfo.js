const Discord = require('discord.js');
const { default_prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    const embed = new Discord.MessageEmbed()
    .setTitle("Server Info")
    .addField("Server Name", message.guild.name)
    .addField("ID:", message.guild.id)
    .addField("Region:", message.guild.region)
    .addField("Created:", message.guild.createdAt)
    .addField("Owner:", message.guild.owner.user)
    .addField("Member Count:", message.guild.memberCount)
    .addField("Channels:", "Voice: " + message.guild.channels.cache.filter(chan => chan.type === 'voice').size + "\nText: " + message.guild.channels.cache.filter(chan => chan.type === 'text').size)
    .addField("Emojis:", message.guild.emojis.cache.array().join(", ") || "None")
    .setThumbnail(message.guild.iconURL())
    .setColor("RANDOM")

    message.channel.send(embed)

}



module.exports.help = {
    name: "serverinfo",
}