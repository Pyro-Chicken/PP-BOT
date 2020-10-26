const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
 
    if (!message.member.voice.channel) return message.channel.send("Connect to a voice channel in order to use the Music feature!");
 
    if (!message.guild.me.voice.channel) return message.channel.send("Sorry, I am not connected to a voice channel. Use '+help music' to get details on how to use the Music Commands!.");
 
    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send("Sorry, you are not conencted to the same voice channel I am!");
 
    message.guild.me.voice.channel.leave()
 

    let musicstopembed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle('I have stopped the music, and left the voice channel! See you next time!')
    .setFooter(`Leave command used by ${message.author.username} || This message will self-destruct in 10 seconds due to lag reasons!`)
    message.channel.send(musicstopembed).then(msg => {
        msg.delete({ timeout: 10000 })
      })
      .catch(console.error);
   
}
 
module.exports.help = {
    name: "stop",
}