const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const yoMamma = require('yo-mamma').default



module.exports.run = async (bot, message, args) => {

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