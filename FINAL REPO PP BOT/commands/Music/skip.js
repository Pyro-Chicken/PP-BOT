const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);
    let voiceChannel = message.member.voice.channel;
    
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
    
    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");        

    let userCount = voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);

    if(!fetched.queue[0].voteSkips)
        fetched.queue[0].voteSkips = [];
    
    if(fetched.queue[0].voteSkips.includes(message.member.id))
        return

    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);

        message.channel.send("Successfully skipped song!");
        fetched.dispatcher.emit('end');
    

    // message.channel.send(`Successfully voted to skip! `);

}


module.exports.help = {
    name: "skip",
}