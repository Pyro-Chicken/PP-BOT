const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if (message.deletable) {
		message.delete();
	}

	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
		return message.reply('You lack the permissions to execute this command').then(m => m.delete(5000));
	}

	if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
		return message.reply("You have not provided a number! You have to use '" + prefix +"purge <number of messages you want to purge> ").then(m => m.delete(5000));
	}

	let deleteAmount;
	if (parseInt(args[0]) > 100) {
		deleteAmount = 100;
	} else {
		deleteAmount = parseInt(args[0]);
	}

	const channel =  message.guild.channels.cache.find(c => c.name === 'bot-logs')

	let E = new Discord.MessageEmbed()
		.setTitle("Purge Command Used!")
		.setDescription(`${message.author} has used the Purge command in ${message.channel}`)
		.addField("Messages Deleted:", deleteAmount)
		.addField("In channel:", message.channel)
		.addField("Used By:", message.author)
		.addField("User ID:", message.author.id)
		.setColor(red)
	channel.send(E)
	message.channel.bulkDelete(deleteAmount, true)

	

	.catch(err => message.reply(`Something went wrong, here it is: ***${err}***`));

}


module.exports.help = {
    name: "purge",
}