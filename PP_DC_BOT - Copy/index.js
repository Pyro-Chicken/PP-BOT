//CLIENT ID: 727075992077598839
//jHmQPVrj1Zf5nkUmuAhH
const Discord = require('discord.js');
const db = require('quick.db')
const { default_prefix, token, version } = require('./config.json');
const fs = require('fs');
const { red, green, blue, lime, orange, yellow, turquoise, purple } = require('./colors.json')
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
// const botauthor = 455808529627086848
// const botID = 727075992077598839
const servers = {};
const ytdl = require('ytdl-core');
var oppusscript = require('opusscript');
const { send } = require('process');
const queue = new Map();
const active = new Map();
const OwnerID = '455808529627086848'

bot.commands = new Discord.Collection(); // Collection for all commands

const modules = ['Moderation', 'Fun', 'Info', 'Music', 'Misc']; // These are the folder names in the command directory

modules.forEach(c => {

    fs.readdir(`./commands/${c}/`, (err, files) => {//go through all the files
        if (err) throw err; // If an Error occurs throw the error
        console.log('\x1b[32m' + `[Command Files]` + "\x1b[0m" + ` Loaded ` + "\x1b[34m" + `${files.length}` + '\x1b[0m' + ` commands of module` + "\x1b[33m" + ` ${c}` + "\x1b[31m"); // When commands of a module are successfully loaded, you can see it in the console

        files.forEach(f => { // Now we go through all files of a folder (module)
            const props = require(`./commands/${c}/${f}`); // Location of the current command File
            bot.commands.set(props.help.name, props); //include bot.commands


		});
	});
});

bot.on('ready', async () => {
	console.log(`Logged in as: [${bot.user.tag}]!`);
	bot.user.setActivity(`Need Help? Ping Me!`, {type: "PLAYING"}); 
	
});
process.on('uncaughtException', function(err, origin) {
	const e = bot.channels.cache.get('740287635112853567')
	e.send('uncaughtException \n' + err.stack +'\n' + origin + `\n\n<@455808529627086848>`)
	console.log(err.stack)
	return;
})

process.on('unhandledRejection', function( err, origin)  {
	const e = bot.channels.cache.get('740287635112853567')
	e.send('unhandledRejection\n' + err.stack + '\n' + origin + `\n\n<@455808529627086848>`)
	console.log(err.stack)
	return;

})

bot.on('message', async message => {
	// console.log(message.content)

	//Blacklist
	let prefix = db.get(`prefix_${message.guild.id}`)

	if(prefix === null) prefix = default_prefix;

	// if(message.author.id === '269081172892581898'){  //My test acc || 
	// 	return;
	// }
	if(message.mentions.members.size){
		if(!message.author.bot){
			let e = message.mentions.members.first()
			if(e.roles.cache.find(r => r.name == 'afk')){
			return message.channel.send(`${e} is currently \`afk\`! Pinging him may be usless. You may have to wait till they come back.`)

			}
		}else return;
		
	}
	
	if (message.content.startsWith(`<@727075992077598839>`) || message.content.startsWith(`<@!727075992077598839>`)){

		let mentionembed = new Discord.MessageEmbed()
		.setTitle('Hello!')
		.setDescription("Here's what you need to know about me:")
		.addField('This guilds prefix is:', '**'+ prefix + '**' +  `\nTo change it use the ` + '**'+ prefix + '**' +  `prefix command!`)
		.addField('I am on version:', `${version}`)
		.addField('If you need help with any of my commands:',`Type "${prefix}help" into the channel.`)
		.addField(`For any suggestions or questions:`,`Please contact PyroChicken#3588!`)
		.setColor('RANDOM')
		message.channel.send(mentionembed)
		
	}
	
	// if(console.error()){
	// 	const OAA = message.guild.channels.cache.find(c => c.name === 'bot-logs')
	// 	OAA.send(console.error())

	// }

	
	if (!message.content.startsWith(prefix || default_prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length || default_prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

let messageArray = message.content.split(" ");
let cmd = messageArray[0];

var ops = {
	active: active,
	OwnerID: OwnerID
}


let commandfile = bot.commands.get(cmd.slice(prefix.length || psprefix.length))
if(commandfile){
	commandfile.run(bot, message, args, ops)
	return;
} else {return;}


//Logging Function!


})

bot.on("messageDelete", async function(message) {

	let MessageDeleteLog = new Discord.MessageEmbed()
	.setTitle('Message Deleted!')
	.setDescription(`Message Deleted: ${message.content}`)
	.addField('Message Sent By:', message.author.username)
	.addField('Deleted In:', message.channel)
	.addField('Deleted At:', message.createdAt)
	.setColor(red)

	if(message.author.id === '727075992077598839'){
		return;
	}

	const LogChannel = message.guild.channels.cache.find(c => c.name === 'bot-logs')

	if(message.content === undefined || message.content === null || message.content === ''){
		return;
	}

	if(!LogChannel){
		message.channel.send('Someone has deleted a message, but I am unable to log it as there is no bot-Logs channel. In order to recieve logs please make a channel named "bot-logs" (without the quotation marks)')

	}

	LogChannel.send(MessageDeleteLog)

})
// bot.on("messageDeleteBulk", function(messages) {

// 	let MessageDeleteBulkLog = new Discord.MessageEmbed()
// 	.setTitle('Messages Deleted In Bulk!')
// 	.setDescription(`Messages Deleted: ${messages.content}`)
// 	.addField('Messages Sent By:', messages.author)
// 	.addField('Deleted In:', messages.channel)
// 	.addField('Deleted At:', messages.createdAt)
// 	.setColor(red)


// 	const LogChannel = messages.guild.channels.cache.find(c => c.name === 'logs')


// 	if(!LogChannel){
// 		messages.channel.send('Someone has deleted messages in bulk, but I am unable to log it as there is no Logs channel. In order to recieve logs please make a channel named "logs" (without the quotation marks)')
// 		return;
// 	}

// 	LogChannel.send(MessageDeleteBulkLog)

// })

bot.on("messageUpdate", function(oldMessage, newMessage) {

	if (oldMessage.author.bot) return;
	if (oldMessage.content === newMessage.content) return;
	if(!oldMessage.partial) {
	

	let MessageUpdateLog = new Discord.MessageEmbed()
		.setTitle('Message Updated/Edited!')
		.setDescription('A message has been updated/edited! Here is the information:')
		.addField('Old Message:', `${oldMessage.content.slice(0, 950)}\n\u200B`)
		.addField('New Message:', `${newMessage.content.slice(0, 950)}\n\u200B`)
		.addField("Channel:", oldMessage.channel.name)
		.addField('Author:', newMessage.author.username)
		.setColor(yellow);

		const channel = newMessage.guild.channels.cache.find(c => c.type === 'text');

	const LogChannel = newMessage.guild.channels.cache.find(c => c.name === 'bot-logs');


	if(!LogChannel){
		channel.send('Someone has updated a message, but I am unable to log it as there is no bot-logs channel. In order to recieve logs please make a channel named "bot-logs" (without the quotation marks)')
		return;
	}

	LogChannel.send(MessageUpdateLog)
	return;
	}
})
bot.on("guildMemberRemove", member => {

	let guildMemberRemove = new Discord.MessageEmbed()
	.setTitle('User Left!')
	.setDescription(member.user.tag)
	.setImage(member.user.displayAvatarURL)
	.setColor(red)


	const LogChannel = member.guild.channels.cache.find(c => c.name === 'bot-logs')
	const channel = member.guild.channels.cache.find((c) => c.type === 'text')

	

	if(!LogChannel){
		channel.send('Someone has left, but I am unable to log it as there is no bot-logs channel. In order to recieve logs please make a channel named "bot-logs" (without the quotation marks)')
		return
	}

	LogChannel.send(guildMemberRemove)

})
bot.on("guildMemberAdd", member => {

	let guildMemberAdd = new Discord.MessageEmbed()
	.setTitle('User Joined!')
	.setDescription(member.user.tag)
	.setImage(member.user.displayAvatarURL)
	.setColor(lime)


	const LogChannel = member.guild.channels.cache.find(c => c.name === 'bot-logs')
	const channel = member.guild.channels.cache.find((c) => c.type === 'text')

	if(!LogChannel){
		channel.send('Someone has joined, but I am unable to log it as there is no bot-logs channel. In order to recieve logs please make a channel named "bot-logs" (without the quotation marks)')
		return
	}

	LogChannel.send(guildMemberAdd)

})
bot.on("channelCreate", channel => {

if(channel.guild === null){
	return;
}

if(channel.type ==='dm' ){
	return;
}

	let ChannelCreate = new Discord.MessageEmbed()
	.setTitle('Channel Created')
	.setDescription(channel)
	.addField("Type:", channel.type)
	.addField("ID:", channel.id)
	.addField("Created At:", channel.createdAt)
	.setColor(orange)


	const LogChannel = channel.guild.channels.cache.find(c => c.name === 'bot-logs')
	const text = channel.guild.channels.cache.find((c) => c.type === 'text')

	if(!LogChannel){
		text.send('A channel has been created, but I am unable to log it as there is no bot-logs channel. In order to recieve logs please make a channel named "bot-logs" (without the quotation marks)')
		return
	}

	LogChannel.send(ChannelCreate)

})

bot.on("channelDelete", channel => {

	if(channel.guild === null){
		return;
	}
	if(channel.type ==='dm' ){
		return;
	}

	let ChannelDelete = new Discord.MessageEmbed()
	.setTitle('Channel Deleted')
	.setDescription(channel)
	.addField("Type:", channel.type)
	.addField("ID:", channel.id)
	.addField("Created At:", channel.createdAt)
	.setColor(red)


	const LogChannel = channel.guild.channels.cache.find(c => c.name === 'bot-logs')
	const text = channel.guild.channels.cache.find((c) => c.type === 'text')

	if(!LogChannel){
		text.send('A channel has been deleted, but I am unable to log it as there is no bot-logs channel. In order to recieve logs please make a channel named "bot-logs" (without the quotation marks)')
		return
	}

	LogChannel.send(ChannelDelete)

})

bot.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
	bot.login(token).catch(console.error)
});



bot.login(token).catch(console.error)





















