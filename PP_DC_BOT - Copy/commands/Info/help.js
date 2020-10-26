const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise, purple } = require('./../../colors.json')
const db = require('quick.db')



module.exports.run = async (bot, message, args) => {
	let prefix = db.get(`prefix_${message.guild.id}`)

	if(prefix === null) prefix = default_prefix;


	if(message.channel.type ==='dm' ){
		return message.channel.send(`Sorry, You may not use this command in a DM!`)
	}
    if(!args[0]){
		if (message.member.hasPermission(`MANAGE_MESSAGES`)){
		let helpembed = new Discord.MessageEmbed()
		.setTitle('-=Help=-')
		.setDescription(`Here are the categories of my commands! Type '${prefix}help <category>' to see the commands for that category`)
		.addField(`Fun`, `Use '${prefix}help fun' to see these commands`)
		.addField(`Info`, `Use '${prefix}help info' to see these commands`)
		.addField(`Music`, `Use '${prefix}help music' to see these commands `)
		.addField(`Moderation`, `Use '${prefix}help moderation' to see these commands`)
		.setColor(blue)
		message.channel.send(helpembed)
		}else {
		let helpembednoadmin = new Discord.MessageEmbed()
		.setTitle('-=Help=-')
		.setDescription(`Here are the categories of my commands! Type '${prefix}help <category>' to see the commands for that category`)
		.addField(`Fun`, `Use '${prefix}help fun' to see these commands`)
		.addField(`Info`, `Use '${prefix}help info' to see these commands`)
		.addField(`Music`, `Use '${prefix}help music' to see these commands `)
		.addField(`Moderation`, `Use '${prefix}help moderation' to see these commands`)
		.setColor(blue)

		message.channel.send(helpembednoadmin)
		}	
		return;
	}
	else if(args[0] === 'fun' || args[0] === 'f'){
		let helpembedFUN = new Discord.MessageEmbed()
		.setTitle('-=Fun Commands=-')
		.setDescription('Here are some fun commands you may use!')
		.addField(`Hello Command`, `Type '${prefix}hello' to get a fun reply!`)
		.addField(`Trivia Command`, `Type '${prefix}trivia' to get a trivia question. Type 1, 2, 3, or 4 in the channel to choose one of the options!`)
		.addField(`Morse Code Command`, `Type '${prefix}morse <text you want to translate from or to morse (eg. can be \`Hello\` or \`.... . .-.. .-.. ---\`!`)
		.addField(`Fortune Cookie Command`, `Type '${prefix}fortune' to get a fortune from google!`)
		.addField(`Urban Dictionary`, `Type '${prefix}urban <what you want to look up>'(Eg. '${prefix}urban hello world') to get the answer straight from Urban Dictionary!`)
		.addField(`Say Command`, `Type '${prefix}say <what you want the bot to say>' and it will repeat after you!`)
		.addField(`Dice roll Commamnd`, `Type '${prefix}diceroll' to roll 2 dice!`)
		.addField(`8ball Command`, `Type '${prefix}8Ball <question(can be more than one word)>' to get an answer from the 8Ball!`)
		.addField(`RandomCase Command`, `Type '${prefix}randomcase <text(can be more than one word>' to get your text shot back at your wiht randomized cases!`)
		.addField(`Yo-Mama Command`, `Type '${prefix}yo-mama' in chat to recieve what may be a brutal yo mama joke! Use with caution ;)`)
		.addField(`Would you rather (WYA) Comamnd`, `Type ${prefix}wya to to get a would you rather prompt which you can discuss with your friends!`)
		.addField(`RPS Command`, `Type '${prefix}rps <rock | paper | scissors>' to play rps with me!`)
		.setColor(lime)
		message.channel.send(helpembedFUN)
	}
	else if(args[0] === 'info' || args[0] === 'i'){
		let heplembedINFO = new Discord.MessageEmbed()
		.setTitle('-=Info Commands=-')
		.setDescription('Here are some information commands you may use!')
		.addField(`Contact Command`, `Type '${prefix}contact <reason>' to contact the bot Owner (PyroChicken) with any questions or suggestions. NOTE: Any innapropriate use of this command, such as spam or innapropriate or invalid reasoning, will result in a blacklist from this bot! **You shall only recieve 1 warning!**`)
		.addField(`Bot Command`, `Type '${prefix}bot' to get information on the Bot and Owner!`)
		.addField(`Hastebin Command`, `Type '${prefix}hastebin <copy paste your code here>' to post your code on a pastebin for others to view! Type '${prefix}hastebin help' to get an example!`)
		.addField(`Minecraft Command`, `Type '${prefix}mc <Server ip> <server port>' to get general info off the minecraft server!`)
		.addField(`User Info`, `Type '${prefix}user-info' to recieve your basic user-info!`)
		.addField(`Remind Command`, `Type '${prefix}remind <duration of reminder in minutes> <reminder message>' to set a reminder that will remind you after the set duration of minutes have passed. Beware: It will ping you!`)
		.addField(`Avatar command`, `Type '${prefix}avatar' (Gives you your own avatar) or '${prefix}avatar <user>' (Gives you the user's avatar) to get either the users our your own avatar!`)
		.addField(`Ping Command`, `Type '${prefix}ping' to recieve the Bot ping and the Discord API ping!`)
		.addField(`Instagram Command`, `Type '${prefix}insta <Instagram user>' to get the main details of an user on Instagram straight from the Instagram API!`)
		.addField(`Weather Command`, `Type '${prefix}weather <Country/City>' to get the Weather of that Country/City! (Note: If you type in a country and you end up with a different city, that is because your Country is too big (like India or USA), therefore, please choose a City or a State instead!`)
		.addField(`Covid${prefix}19 Command`, `Type '${prefix}covid <all>' or '${prefix}covid <any country>' to get the Covid-19 results either globally or specific to a country!`)
		.addField(`Poll Command`, `Type '${prefix}poll <channel (eg.#announcements)> <mention:true||mention:false (Whether you want to ping everyone on the server or not)> <Poll message>' to create a poll in a desired channel! (Note: When checking results, subtract 1 from each of the reactions as the bot reacted on each one to make them present!)`)
		.addField(`Uptime Command`, `Type '${prefix}uptime' to recieve an embed with information on how long ${bot.user.tag} has been online for!`)
		.addField(`IMDB Command`, `Type '${prefix}imdb <movie or serie name> to get the main IMDB results for it straight from an API!`)
		.setColor(turquoise)
		message.channel.send(heplembedINFO)
	}
	else if(args[0] === 'music' || args[0] === 'mu'){
		let helpembedMusic = new Discord.MessageEmbed()
			.setTitle('-=Music Commands=-')
			.setDescription(`Here are some Music commands you may use! **NOTE: You must be in a voice channel to use these commands!** (All tracks requested to be played will only be played as an MP3 and no visuals will be provided!)`)
			.addField(`Join Command`, `Type '${prefix}join' to make me Join your voice channel! I can only be on 1 channel per guild!`)
			.addField(`Leave Command`, `Type '${prefix}leave' to stop playing any music that is playing, clear the queue, and leave the voice channel I am connect to!`)
			.addField(`Play Command`, `Type '${prefix}play <Youtube URL>' to play a song or video from youtube in your voice chat! You may use this command again and agian to add to the queue of songs or videos to be Played!`)
			.addField(`Search Command`, `Type '${prefix}search <search information on the video you want (eg. keywords, or title)>. Then type the number that correspondes to the video you wuold like (eg. 1, 5, 17, etc). You may use this command again and agian to add to the queue of songs or videos to be Played! You will understand once you use it! :D`)
			.addField(`Pause Command`, `Type '${prefix}pause' to pause the currently playing track in your voice channel!`)
			.addField(`Resume Command`, `Type '${prefix}resume' to resume the currently paused track in your voice channel!`)
			.addField(`Skip Command`, `Type '${prefix}skip' to skip to the next track in the queue!`)
			.addField(`Queue Command`, `Type '${prefix}queue' to get a list of all the tracks in the queue!`)
			.addField(`Clear Command`, `Type '${prefix}clear' to clear the queue of songs in your guild!`)
			.setColor(purple)
		message.channel.send(helpembedMusic)
	}	
	else if(args[0] === 'moderation' || args[0] === 'm'){
		if(message.member.hasPermission(`MANAGE_MESSAGES`)){
		let helpembedMOD = new Discord.MessageEmbed()
		.setTitle('-=Moderation Commands=-')
		.setDescription('Here are some moderation commands you may use!')
		.addField(`Purge command`, `type '${prefix}purge <amount of messages you want to delete -1>' to bulk delete messages`)
		.addField(`Report Command`, `Type '${prefix}report <user> <reason>' to report someone.`)
		.addField(`Mute/Unmute Command`, `Type '${prefix}mute <user> <reason>' or '${prefix}unmute <user> <reason>' to mute or unmute a user!`)
		.addField(`Kick Command`, `Type '${prefix}kick <user> <reason>' To kick them from the server. Invite them again to revoke the kick!`)
		.addField(`Ban Command`, `Type '${prefix}ban <user> <reason>' to ban them from the server. To Unban simply go to server settings > BANS > Click the user you wish to unban > click Revoke Ban`)
		.addField(`Nickname Command`, `Type '${prefix}nn <nickname>' to change your nickname, type '${prefix}nn <user> <nickname>' to change others nickname, and type '${prefix}nn bot <nickname>' to change the bots nickname.`)
		.addField(`Announce Command`, `Type '${prefix}announce <what you would like to announce>' and it will announce it for you in the announcemnts channel! (It will also mention everyone with @ here so it is unnecessary do it yourself.`)
		.addField(`Embed Command`, `Type '${prefix}embed <title> | <description> | <color hex>' to make and send an embed! `)
		.setColor(red)
		message.channel.send(helpembedMOD)


	}else{
		if(message.member.hasPermission(`CHANGE_NICKNAME`)){
			let helpembednick = new Discord.MessageEmbed()
			.setTitle('-=Mod Commands for users without Mod perms=-')
			.setDescription(`Here are the moderational commands users without the moderation permissions can access!`)
			.addField(`Report Command`, `Type '${prefix}report <user> <reason>' to report someone.`)
			.addField(`Nickname Command`, `Type '${prefix}nn <nickname>' to change your nickname if you have the **CHANGE_NICKNAME** permission.`)
			.setColor(orange)
		message.channel.send(helpembednick)
		}else{
			let helpembedreport = new Discord.MessageEmbed()
			.setTitle('-=Mod Commands for users without Mod perms=-')
			.setDescription(`Here are the moderational commands users without the moderation permissions can access!`)
			.addField(`Report Command`, `Type '${prefix}report <user> <reason>' to report someone.`)
			.setColor(orange)
		message.channel.send(helpembedreport)
		}
		

	}
	}else{
		message.channel.send(`That is not a valid category. Please Use ${prefix}help for a list of valid categories!`)
	}


}


module.exports.help = {
    name: `help`,
}