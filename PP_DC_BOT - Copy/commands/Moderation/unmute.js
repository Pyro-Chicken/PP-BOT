const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    let umUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
	if (!umUser) return message.channel.send("Couldn't find user!");
	let umReason = args.join(" ").slice(22);
	
	let umEmbed = new Discord.MessageEmbed()
	.setTitle('-=Unmute=-')
	.setColor('#008000')
	.addField('Unmuted user:', `${umUser} with ID: ${umUser.id}`)
	.addField('Unmuted By:', `<@${message.author.id}> with ID: ${message.author.id}`)
	.addField('Reason:', umReason)
	.addField("Reported In:", message.channel)
	.addField("Time of report:", message.createdAt)
	if(!umReason) return message.channel.send("Provide a reason")

			if(umUser.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.author.hasPermission('ADMINISTRATOR') ) {
				message.channel.send("You can not mute that person!").then(m => m.delete(10000));
			}
		
			else {
				let umRole = message.guild.roles.cache.find(role => role.name === 'Muted');
				if(umRole) {
					umUser.roles.remove(umRole);
					message.guild.channels.cache.find(channel => channel.name === 'bot-logs' && channel.type === "text").send(umEmbed);
				}
				
				else {
					message.channel.send('Role not found!').then(m => m.delete(10000));
				}
		
		
			}
	
			
	

}


module.exports.help = {
    name: "unmute",
}