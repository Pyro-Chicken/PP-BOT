
const yoMamma = require('yo-mamma').default



const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    let insult = yoMamma();

    let insultEmbed = new Discord.MessageEmbed()
        .setTitle('Here\'s a Yo Mama Joke, Brace Yourself!')
        .setDescription(insult)
        .setColor(red)
    
        message.channel.send(insultEmbed)

}


module.exports.help = {
    name: "yo-mama"
}