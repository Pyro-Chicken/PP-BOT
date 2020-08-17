const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')



module.exports.run = async (bot, message, args) => {

    if (message.deletable){
        message.delete();
    }
    
    const msg = await message.channel.send("Pinging.....");
    let pingembed = new Discord.MessageEmbed()
    .setColor(green)
    .setTitle('-=Ping=-')
    .setDescription('Here is Latency of the bot and the API')
    .addField(`Bot Latency:`, `${Math.floor(msg.createdAt - message.createdAt)} ms`)
    .addField('API Latency:', `${Math.round(bot.ws.ping)} ms`)
    .setFooter('This message will self-destruct in 10 seconds! (For lag reasons)')
    msg.edit(pingembed).then(msg => {msg.delete({timeout:10000})});
}


module.exports.help = {
    name: "ping",
}






