const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    const mention = message.mentions.users.first();

    if (message.author.id === '455808529627086848' || message.author.id === '463624829296443402' || message.author.id === '339712578894823424' || message.author.id === '629320948637761568' || message.author.id === '601122380621938691' || message.author.id === '524871312909402112' ){
        if(!args[0]){
            message.channel.send('You need to provide who you want to ping. Correct syntax: +spamping <user>')
            return;
        }
        else {
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            message.channel.send(args.join(" "))
            if(message.deletable){
                message.delete()
            }
        }
        
    }else{
        message.channel.send('You do not have access to this command!')
    }
}


module.exports.help = {
    name: "spam",
}