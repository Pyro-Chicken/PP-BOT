const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
const channel = message.mentions.channels.first()
	if(!args[0]){
		return message.reply("Well, what do you want me to say? Use '+say <text>' to make me say anything! Be polite :)").then(m => {m.delete({ timeout: 10000 })});	
	}
	if(args.join(" ").toLowerCase() === "i am stupid" || args.join(" ").toLowerCase() === "I'm Stupid" || args.join(" ").toLowerCase() === "i am dumb" || args.join(" ").toLowerCase() === "I'm Dumb"){
		message.channel.send('Yes, I know.')
		return;	
	}
	if(channel){
		if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == '455808529627086848'){
			if(message.deletable){
				message.delete();
			}
				channel.send(args.slice(1).join(" "))
				message.channel.send("Message Sent!")
				
			
			}else return message.channel.send("You lack the permissions to send a message to another channel via the bot! This requires the **ADMINISTRATOR** permission!")
		}else{
			if (message.deletable){
				message.delete();
			}; 
			message.channel.send(`${args.join(` `)}`);
			return;
		
		}
	
	
}


module.exports.help = {
    name: "say",
}