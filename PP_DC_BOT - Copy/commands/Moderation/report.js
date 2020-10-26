const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    if(!args[0]) return message.channel.send("Incorrect Syntax: Usage: " + prefix +"report <user> <reason>" ) 
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if (!rUser) return message.channel.send("Couldn't find user!");
    let rReason = args.join(" ").slice(22);
    if (!rReason) {
        message.channel.send("Incorrect Syntax: Usage: " + prefix +"report <user> <reason>" )
        return;
    }
    
    
    let rEmbed = new Discord.MessageEmbed()
    .setTitle('-=Report=-')
    .setColor('#FFA500')
    .addField('Reported user:', `${rUser} With ID: ${rUser.id}`)
    .addField('Reported by:', `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Reason:", rReason)
    .addField("Reported In:", message.channel)
    .addField("Time of Report:", message.createdAt)
    
    if (args[0] === '<@!727075992077598839>' || args[0] === '<@727075992077598839>' ) return message.reply("You cant report me! I am **superior!**")

        const ee = message.guild.channels.cache.find(channel => channel.name === 'reports' && channel.type === "text")

        if(!ee) return message.channel.send("There is no reports channel. Please create a channel called \"reports\"!")

        ee.send(rEmbed);
        message.channel.send(args[0] + ' Has been reported for Reason:' + rReason)
    
    

    

    
}


module.exports.help = {
    name: "report",
}