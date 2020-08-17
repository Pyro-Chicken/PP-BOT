const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
            
    if(!message.member.voice.channel)
        return message.channel.send("You are not in a voice channel");        

    if(fetched.dispatcher.paused)
        return message.channel.send("The music is already paused");
        
    fetched.dispatcher.pause();    
    
    message.channel.send(`Successfully paused the track **${fetched.queue[0].songTitle}**`);  

}


module.exports.help = {
    name: "pause",
}