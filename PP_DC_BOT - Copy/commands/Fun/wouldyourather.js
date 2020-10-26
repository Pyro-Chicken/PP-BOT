const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    const questions = require('./../../data_for_commands/wouldyourather.json')

if(args[0] === 'length'){
    return message.channel.send(questions.length + ' Questions.')
}

    const random = Math.floor(Math.random() * questions.length)
    const reply = questions[random]

    let e = new Discord.MessageEmbed()
        .setTitle("Would you rather?")
        .setDescription(`**${reply}**`)
        .setFooter('Requested by: ' + message.author.username)
        .setColor(orange)
    message.channel.send(e)
    // console.log(e)

}


module.exports.help = {
    name: "wyr",
}