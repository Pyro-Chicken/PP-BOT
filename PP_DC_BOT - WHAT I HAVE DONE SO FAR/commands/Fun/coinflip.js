const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const flipcoin = ["Heads", "Tails"];





module.exports.run = async (bot, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    var randomIndex = Math.floor(Math.random() * flipcoin.length); 

    message.channel.send(`<@${member.user.id}> `+ flipcoin[randomIndex]);
   

}

 
module.exports.help = {
    name: "coinflip",
    description: ''
}