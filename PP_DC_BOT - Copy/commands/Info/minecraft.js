
const ping = require('minecraft-server-util');


const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(!args[0]) return message.channel.send('You must type a minecraft server ip')
    if(!args[1]) return message.channel.send('You must type a minecraft server port')

    ping(args[0], parseInt(args[1]), (error, reponse) =>{
        if(error) throw error
        const E = new Discord.MessageEmbed()
        .setTitle('Server Status')
        .addField('Server IP', reponse.host)
        .addField('Server Version', reponse.version)
        .addField('Online Players', reponse.onlinePlayers)
        .addField('Max Players', reponse.maxPlayers)
        .setColor(yellow)
        
     message.channel.send(E)

    })
}


module.exports.help = {
    name: "mc",
}