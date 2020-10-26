const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    return new Promise((resolve, reject) => {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
        voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });
}


module.exports.help = {
    name: "join",
}

