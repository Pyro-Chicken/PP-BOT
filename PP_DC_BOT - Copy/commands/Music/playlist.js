const Discord = require('discord.js');
const { default_prefix, token, version, yt_key } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')
const ytlist = require('youtube-playlist');

const opts = {
    maxResults: 25,
    key: yt_key,
    type: 'playlist'
};








module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

const url = args.join(" ")

ytlist(url, 'url').then(res => {
    console.log(res.data.playlist)

var videos = res.data.playlist
    

    let commandFile = require ("./play.js");
    commandFile.run(bot, message, videos, opts, ops);

    
})

    }


module.exports.help = {
    name: "playlist",
}
