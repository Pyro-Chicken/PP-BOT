const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')



module.exports.run = async (bot, message, args) => {

	let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!kUser) return message.channel.send("Can't find user!");
	let kReason = args.join(" ").slice(22);
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You lack the permission to execute this command, sorry.");
	if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person cannot be kicked!");


	let kEmbed = new Discord.MessageEmbed()
		.setTitle("-=Kick=-")
		.setColor("#c90a0a")
		.addField("Kicked User:", `${kUser} with ID: ${kUser.id}`)
		.addField("Kicked By:", `<@${message.author.id}> with ID: ${message.author.id}`)
		.addField("Reason:", kReason)
		.addField("Kicked in:", message.channel)
		.addField("Time:", message.createdAt)

    

	message.guild.member(kUser).kick(kReason);
	message.guild.channels.cache.find(channel => channel.name === 'logs' && channel.type === "text").send(kEmbed);

	return;

}


module.exports.help = {
    name: "kick",
}