const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise, purple } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

    if(!args[0]){
		if (message.member.hasPermission("MANAGE_MESSAGES")){
		let helpembed = new Discord.MessageEmbed()
		.setTitle('-=Help=-')
		.setDescription("Here are the categories of my commands! Type '-help <category>' to see the commands for that category")
		.addField("Fun", "Use '-help fun' to see these commands")
		.addField("Info", "Use '-help info' to see these commands")
		.addField("Music", "Use '-help music' to see these commands ")
		.addField("Moderation", "Use '-help moderation' to see these commands")
		.setColor(blue)
		message.channel.send(helpembed)
		}else {
		let helpembednoadmin = new Discord.MessageEmbed()
		.setTitle('-=Help=-')
		.setDescription("Here are the categories of my commands! Type '-help <category>' to see the commands for that category")
		.addField("Fun", "Use '-help fun' to see these commands")
		.addField("Info", "Use '-help info' to see these commands")
		.addField("Music", "Use '-help music' to see these commands ")
		.setColor(blue)

		message.channel.send(helpembednoadmin)
		}	
		return;
	}
	else if(args[0] === 'fun'){
		let helpembedFUN = new Discord.MessageEmbed()
		.setTitle('-=Fun Commands=-')
		.setDescription('Here are some fun commands you may use!')
		.addField("Hello Command", "Type '-hello' to get a fun reply!")
		.addField("Trivia Command", "Type '-trivia' to get a trivia question. Type 1, 2, 3, or 4 in the channel to choose one of the options!")
		.addField("Morse Code Command", "Type '-morse <text you want to translate from or to morse (eg. can be \"Hello\" or \".... . .-.. .-.. ---\"!")
		.addField("Fortune Cookie Command", "Type '-fortune' to get a fortune from google!")
		.addField("Urban Dictionary", "Type '-urban <what you want to look up>'(Eg. '-urban hello world') to get the answer straight from Urban Dictionary!")
		.addField("Say Command", "Type '-say <what you want the bot to say>' and it will repeat after you!")
		.addField("Dice roll Commamnd", "Type '-diceroll' to roll 2 dice!")
		.addField("8ball Command", "Type '-8Ball <question(can be more than one word)>' to get an answer from the 8Ball!")
		.addField("RandomCase Command", "Type '-randomcase <text(can be more than one word>' to get your text shot back at your wiht randomized cases!")
		.addField("Yo-Mama Command", "Type '-yo-mama' in chat to recieve what may be a brutal yo mama joke! Use with caution ;)")
		.addField("RPS Command", "Type '-rps <rock | paper | scissors>' to play rps with me!")
		.setColor(lime)
		message.channel.send(helpembedFUN)
	}
	else if(args[0] === 'info'){
		let heplembedINFO = new Discord.MessageEmbed()
		.setTitle('-=Info Commands=-')
		.setDescription('Here are some information commands you may use!')
		.addField("Contact Command", "Type '-contact <reason>' to contact the bot Owner (PyroChicken) with any questions or suggestions. NOTE: Any innapropriate use of this command, such as spam or innapropriate or invalid reasoning, will result in a blacklist from this bot! **You shall only recieve 1 warning!**")
		.addField("Bot Command", "Type '-bot' to get information on the Bot and Owner!")
		.addField("Hastebin Command", "Type '-hastebin <copy paste your code here>' to post your code on a pastebin for others to view! Type '-hastebin help' to get an example!")
		.addField("Minecraft Command", "Type '-mc <Server ip> <server port>' to get general info off the minecraft server!")
		.addField("User Info", "Type '-user-info' to recieve your basic user-info!")
		.addField("Avatar command", "Type '-avatar' (Gives you your own avatar) or '-avatar <user>' (Gives you the user's avatar) to get either the users our your own avatar!")
		.addField("Ping Command", "Type '-ping' to recieve the Bot ping and the Discord API ping!")
		.addField("Instagram Command", "Type '-insta <Instagram user>' to get the main details of an user on Instagram straight from the Instagram API!")
		.addField("Weather Command", "Type '-weather <Country/City>' to get the Weather of that Country/City! (Note: If you type in a country and you end up with a different city, that is because your Country is too big (like India or USA), therefore, please choose a City or a State instead!")
		.addField("Covid-19 Command", "Type '-covid-19 <all>' or '-covid-19 <any country>' to get the Covid-19 results either globally or specific to a country!")
		.addField("Poll Command", "Type '-poll <channel (eg.#announcements)> <mention:true||mention:false (Whether you want to ping everyone on the server or not)> <Poll message>' to create a poll in a desired channel! (Note: When checking results, subtract 1 from each of the reactions as the bot reacted on each one to make them present!)")
		.addField("Uptime Command", `Type '-uptime' to recieve an embed with information on how long ${bot.user.tag} has been online for!`)
		.addField("IMDB Command", "Type '-imdb <movie or serie name> to get the main IMDB results for it straight from an API!")
		.setColor(turquoise)
		message.channel.send(heplembedINFO)
	}
	else if(args[0] === 'music'){
		let helpembedMusic = new Discord.MessageEmbed()
			.setTitle('-=Music Commands=-')
			.setDescription("Here are some Music commands you may use! **NOTE: You must be in a voice channel to use these commands!** (All tracks requested to be played will only be played as an MP3 and no visuals will be provided!)")
			.addField("Join Command", "Type '-join' to make me Join your voice channel! I can only be on 1 channel per guild!")
			.addField("Leave Command", "Type '-leave' to stop playing any music that is playing, clear the queue, and leave the voice channel I am connect to!")
			.addField("Play Command", "Type '-play <Youtube URL>' to play a song or video from youtube in your voice chat! You may use this command again and agian to add to the queue of songs or videos to be Played!")
			.addField("Search Command", "Type '-search <search information on the video you want (eg. keywords, or title)>. Then type the number that correspondes to the video you wuold like (eg. 1, 5, 17, etc). You may use this command again and agian to add to the queue of songs or videos to be Played! You will understand once you use it! :D")
			.addField("Pause Command", "Type '-pause' to pause the currently playing track in your voice channel!")
			.addField("Resume Command", "Type '-resume' to resume the currently paused track in your voice channel!")
			.addField("Skip Command", "Type '-skip' to skip to the next track in the queue!")
			.addField("Queue Command", "Type '-queue' to get a list of all the tracks in the queue!")
			.addField("Clear Command", "Type '-clear' to clear the queue of songs in your guild!")
			.setColor(purple)
		message.channel.send(helpembedMusic)
	}	
	else if(args[0] === 'moderation'){
		if(message.member.hasPermission("MANAGE_MESSAGES")){
		let helpembedMOD = new Discord.MessageEmbed()
		.setTitle('-=Moderation Commands=-')
		.setDescription('Here are some moderation commands you may use!')
		.addField("Purge command", "type '-purge <amount of messages you want to delete -1>' to bulk delete messages")
		.addField("Report Command", "Type '-report <user> <reason>' to report someone.")
		.addField("Mute/Unmute Command", "Type '-mute <user> <reason>' or '-unmute <user> <reason>' to mute or unmute a user!")
		.addField("Kick Command", "Type '-kick <user> <reason>' To kick them from the server. Invite them again to revoke the kick!")
		.addField("Ban Command", "Type '-ban <user> <reason>' to ban them from the server. To Unban simply go to server settings > BANS > Click the user you wish to unban > click Revoke Ban")
		.addField("Announce Command", "Type '-announce <what you would like to announce>' and it will announce it for you in the announcemnts channel! (It will also mention everyone with @ here so it is unnecessary do it yourself.")
		.addField("Embed Command", "Type '-embed <title> | <description> | <color hex>' to make and send an embed! ")
		.setColor(red)
		message.channel.send(helpembedMOD)


	}else{
		message.reply("You do not have enough permissions to access this command list!")
	}
	}else{
		message.channel.send("That is not a valid category. Please Use -help for a list of valid categories!")
	}


}


module.exports.help = {
    name: "help",
}