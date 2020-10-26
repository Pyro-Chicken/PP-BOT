const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");

    if(!message.member.voice.channel)
        return message.channel.send("You are not in a voice channel");          

    if(!fetched.dispatcher.paused)
        return message.channel.send("The music isn't paused");
        
    fetched.dispatcher.resume();    
    
    message.channel.send(`Successfully resumed the track **${fetched.queue[0].songTitle}**`);    
}


module.exports.help = {
    name: "resume",
}