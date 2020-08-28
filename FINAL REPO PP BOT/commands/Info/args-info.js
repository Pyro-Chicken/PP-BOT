const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {


    if(!args.length){
        return message.channel.send("You did not provide any arguments! This command gives you information about the **ARGUMENTS** provided!")
    } else if(args[0] === 'help'){
        return message.channel.send("This command gives you information about the **ARGUMENTS** provided! Type in some arguments and I will tell you their place!")
    }
    let e = new Discord.MessageEmbed()
        .setTitle("Your Args!")
        .setDescription("This tells you the arguments provided (${args}) and the length! (${args.length})")
        .addField("Arguments:", args, true)
        .addField("Arguments length:", args.length, true)
        .setColor(turquoise)
        .setFooter("This command was never made for public use, but mainly for PyroChicken#3588's own needs! However, feel free to use it!")
        .setTimestamp()
    message.channel.send(e)
    return

}



module.exports.help = {
    name: "argsinfo",
}