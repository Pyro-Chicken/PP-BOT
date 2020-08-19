const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

let pollChannel = message.mentions.channels.first();
let PollDescription = args.slice(2).join(' ');
if(!PollDescription){
    message.channel.send("Incorrect syntax! Proper usage: '+poll <channel (eg.#announcements)> <mention:true||mention:false (Whether you want to ping everyone on the server or not)> <Poll message>'")
    return;
}
let PollEmbed = new Discord.MessageEmbed()
.setTitle('NEW POLL! VOTE NOW!')
.setDescription(PollDescription)
.setColor(turquoise)
if(args[1] === 'mention:true'){
let EmbedMessage = await pollChannel.send(PollEmbed);
await EmbedMessage.react('👍')
await EmbedMessage.react('👎')
pollChannel.send("@here")
}else if(args[1] === 'mention:false') {
    let EmbedMessage = await pollChannel.send(PollEmbed);
    await EmbedMessage.react('👍')
    await EmbedMessage.react('👎')
}else if(!args[1]){
    message.channel.send("Incorrect syntax! Proper usage: '+poll <channel (eg.#announcements)> <mention:true||mention:false (Whether you want to ping everyone on the server or not)> <Poll message>'")
}else if(!args[0]){
    message.channel.send("Incorrect syntax! Proper usage: '+poll <channel (eg.#announcements)> <mention:true||mention:false (Whether you want to ping everyone on the server or not)> <Poll message>'")

}
}


module.exports.help = {
    name: "poll",
}