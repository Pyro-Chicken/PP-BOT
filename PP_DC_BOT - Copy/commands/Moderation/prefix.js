const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

if(args[0] === 'prefix'){
    message.channel.send("This guilds prefix is: " + prefix)
    return;
}
        
if(message.member.hasPermission("ADMINISTRATOR") || message.author.id === '455808529627086848'){

    
if(!args[0]){
    return message.channel.send("Please state a prefix!")
}

if(args[1]){
    return message.channel.send("Prefix's cant be double arguments!")
}
if(args[0].length > 3){
    return message.channel.send("Your prefix cannot be longer than 3 characters!")
}
if(args.join("") === default_prefix){
    db.delete(`prefix_${message.guild.id}`)
    return await message.channel.send("Resetted prefix!")
}

db.set(`prefix_${message.guild.id}`, args[0])
await message.channel.send(`Set bot prefix to ${args[0]}`)
// console.log(db.get(`prefix_${message.guild.id}`))
}else{
    return message.channel.send("You do not have permission to execute this command!")
}

}




module.exports.help = {
    name: "prefix",
}