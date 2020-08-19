const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')



module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find user!");
    let rReason = args.join(" ").slice(22);
    
    
    let rEmbed = new Discord.MessageEmbed()
    .setTitle('-=Report=-')
    .setColor('#FFA500')
    .addField('Reported user:', `${rUser} With ID: ${rUser.id}`)
    .addField('Reported by:', `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Reason:", rReason)
    .addField("Reported In:", message.channel)
    .addField("Time of Report:", message.createdAt)
    
    if(message.member.hasPermission('ADMINISTRATOR')){
        message.guild.channels.cache.find(channel => channel.name === 'reports' && channel.type === "text").send(rEmbed);
    
    }else {
        message.channel.send('You do not have the permission execute this command!');
    };

}


module.exports.help = {
    name: "report",
}