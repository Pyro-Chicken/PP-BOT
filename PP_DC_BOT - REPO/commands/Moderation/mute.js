const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
    if (!mUser) return message.channel.send("Couldn't find user!");
    let mReason = args.join(" ").slice(22);
    
    let mEmbed = new Discord.MessageEmbed()
    .setTitle('-=Mute=-')
    .setColor('#FFFF00')
    .addField('Muted user:', `${mUser} with ID: ${mUser.id}`)
    .addField('Muted By:', `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField('Reason:', mReason)
    .addField("Reported In:", message.channel)
    .addField("Time of report:", message.createdAt)

            if(mUser.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.author.hasPermission('ADMINISTRATOR') ) {
                message.channel.send("You can not mute that person!").then(m => m.delete(10000));
            }
        
            else {
                let mRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                if(mRole) {
                    mUser.roles.add(mRole);
                    message.guild.channels.cache.find(channel => channel.name === 'logs' && channel.type === "text").send(mEmbed);
    
                }
                
                else {
                    message.channel.send('Muted role not found!').then(m => m.delete(10000));
                }
        
        
            }
    
            

}


module.exports.help = {
    name: "mute",
}