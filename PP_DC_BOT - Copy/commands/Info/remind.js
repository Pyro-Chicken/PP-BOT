const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
let dura = parseInt(args[0])
if(!args.length){
    return message.channel.send(`Incorrect syntax! Correct usage: ${prefix}remind <In how many minutes you would like to be reminded> <reminder>`)
}
if(isNaN(dura)){
    return message.channel.send("The duration of the reminder should be a number! " + `Correct usage: ${prefix}remind <In how many minutes you would like to be reminded> <reminder>`)
}
message.channel.send("Reminder created for " + dura + " minutes. Reminder message: " + args.slice(1).join(' '))
setTimeout( async function () {

    let reminder = args.slice(1).join(' ')
    let e = new Discord.MessageEmbed()
        .setTitle("REMINDER")
        .setDescription(reminder)
        .setFooter("Requested by " + `${message.author.username}`)
        .setTimestamp()
        .setColor(yellow)
    message.channel.send(`\n <@${message.author.id}> `)
    message.channel.send(e)
    message.channel.send(`\n <@${message.author.id}> `)

}, dura * 60000)

}


module.exports.help = {
    name: "remind",
}