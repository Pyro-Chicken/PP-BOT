const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!bUser) return message.channel.send("Can't find user!");
	let bReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You lack the permission to execute this command, sorry.");
	if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person cannot be banned!");


	let bEmbed = new Discord.MessageEmbed()
		.setTitle("-=Ban=-")
		.setColor(red)
		.addField("banned User:", `${bUser} with ID: ${bUser.id}`)
		.addField("Banned By:", `<@${message.author.id}> with ID: ${message.author.id}`)
        .addField("Reason:", bReason)
        .addField("Banned in:", message.channel)
        .addField('To Unban Do The Following:', 'Go to Server Settings > Bans > Click on the user you wish to unban > Revoke Ban.')
		.addField("Time:", message.createdAt)



	message.guild.member(bUser).ban(bReason);
	message.guild.channels.cache.find(channel => channel.name === 'logs' && channel.type === "text").send(bEmbed);




	return;

}


module.exports.help = {
    name: "ban",
}