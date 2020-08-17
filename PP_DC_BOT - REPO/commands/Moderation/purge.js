const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')



module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
		message.delete();
	}

	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
		return message.reply('You lack the permissions to execute this command').then(m => m.delete(5000));
	}

	if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
		return message.reply("You have not provided a number! You have to use '+purge <number of messages you want to purge> ").then(m => m.delete(5000));
	}

	let deleteAmount;
	if (parseInt(args[0]) > 100) {
		deleteAmount = 100;
	} else {
		deleteAmount = parseInt(args[0]);
	}

	message.channel.bulkDelete(deleteAmount, true)
	.catch(err => message.reply(`Something went wrong, here it is: ***${err}***`));

}


module.exports.help = {
    name: "purge",
}