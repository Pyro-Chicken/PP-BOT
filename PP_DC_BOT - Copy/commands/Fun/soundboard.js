const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')


module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    if(!args.length) { return message.reply("You have found the secret command. Find out how to use it yourself!") }

    if(message.member.voice.channel){

      
        if(args[0] == 'WOO'){
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
            voiceChannel.join()
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('C:/Users/tpspr/PP_DC_BOT/data_for_commands/soundboard/Wo.mp3', { volume: 10 })
            dispatcher.on('start', () => {
                message.channel.send("Playing...")
        });
            
            dispatcher.on('finish', () => {
                message.channel.send('Done.');
                voiceChannel.leave()
            });
            
            dispatcher.on('error', console.error);
        }else if(args[0] === 'fart'){
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
            voiceChannel.join()
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('C:/Users/tpspr/PP_DC_BOT/data_for_commands/soundboard/fart.mp3', { volume: 5 })
            dispatcher.on('start', () => {
                message.channel.send("Playing...")
            });
            
            dispatcher.on('finish', () => {
                message.channel.send('Done.');
                voiceChannel.leave()
            });
            
            dispatcher.on('error', console.error);
        }else { return message.channel.send("Thats not a sound in the soundboard!") }
        
    }else { return message.channel.send("And.... Where do you expect me to play this?") }

}


module.exports.help = {
    name: "sb",
}