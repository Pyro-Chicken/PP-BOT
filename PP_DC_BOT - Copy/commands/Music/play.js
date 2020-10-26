const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
 
    voiceChannel = message.member.voice.channel;
    if(!voiceChannel)
        return message.channel.send("You are not in a voice channel");

    let validate = await ytdl.validateURL(args[0]);

    if(!validate)
        return message.channel.send("Enter a valid youtube url please!");

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};

    if(!data.connection) 
        data.connection = await message.member.voice.channel.join();
    if(!data.queue)
        data.queue = [];
    data.guildID = message.guild.id;
    
    data.queue.push({
        songTitle: info.videoDetails.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if(!data.dispatcher) play(bot, ops, data);

    else
        message.channel.send(`Added to queue: **${info.videoDetails.title}** | requested by **${message.author.username}**`);

    ops.active.set(message.guild.id, data);


async function play(bot, ops, data){

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly', highWaterMark: 1<<25}));

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function () {
        finish(bot, ops, this)

        .catch(console.error())
    })
}

function finish(bot, ops, dispatcher){
    let fetchedData = ops.active.get(dispatcher.guildID);

    fetchedData.queue.shift();

    if(fetchedData.queue.length > 0){
        ops.active.set(dispatcher.guildID, fetchedData);

        play(bot, ops, fetchedData)
        
        .catch(console.error())
    }

    else{

        ops.active.delete(dispatcher.guildID);

        let vc = bot.guilds.cache.get(dispatcher.guildID).me.voice.channel;

        if(vc) vc.leave();
    }
    }
}


module.exports.help = {
    name: "play",
    description: "Play Music!"
}