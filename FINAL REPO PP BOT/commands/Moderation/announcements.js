const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

if(!args[0]){
    message.channel.send("You must supply an argument for the bot to announce!");
}
const announcementChannel = message.guild.channels.cache.find(channel => channel.name === 'announcements' && channel.type === "text")

if(args[0]){
    if(!announcementChannel){
        message.channel.send("I am not able to make an annoucement, as there is no announcements channel! Please make a channel named 'announcements' (without the quatation marks)! ")
    }

    let announcement = args.join(" ");


    announcementChannel.send('***NEW ANNOUCEMENT!*' + '\n**+--------------------------------------------------------------------------------+**\n' + `**${announcement}**` + '\n**+--------------------------------------------------------------------------------+**' + '\n \n \n @here')


    return;

}



}


module.exports.help = {
    name: "announce",
}