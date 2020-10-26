const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    const audioUrl = message.content.split(' ');
    var convertTrack;

    let fetched = ops.active.get(message.guild.id);
    if(!fetched)
        return message.channel.send("There isn't any music playing in this guild!");
    let queue = fetched.queue;

    if(queue.length == 1){
        return message.channel.send("There are not tracks in the queue to remove!");
    }

    try{
        message.channel.send(`All tracks have been cleared from the queue`); 

        queue.splice();    

    }

    catch(error){
        console.log(error)
        return message.channel.send("Error :(");

    }
}


module.exports.help = {
    name: "clear",
}