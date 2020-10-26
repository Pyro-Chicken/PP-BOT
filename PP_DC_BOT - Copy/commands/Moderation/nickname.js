const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;


if(message.member.hasPermission("MANAGE_NICKNAMES") || message.member.hasPermission("CHANGE_NICKNAME")){
  if(!args.length){
    message.channel.send(`Incorrect syntax. Correct usage: **' ${prefix}nn reset | ${prefix}nn <user> <nickname> | ${prefix}nn <nickname> | ${prefix}nn bot <nickname>'**. Make sure I have the permissions and my role is on top of the users role whom nickname you are trying to change. `)
    return;
  }
  if(args[0] == 'reset'){
    message.channel.send("Reset your nickname")
    message.member.setNickname("")
    return;
  }

      if(args[0] === 'bot'){
        if(args.slice(1).join(" ").length > 32){
          message.channel.send("Character limit exceeded. Nickname must be 32 characters or less! You had: " + args.slice(1).join(" ").length)
          return;
        }
        message.guild.members.cache.get(bot.user.id).setNickname(args.slice(1).join(" "));
        message.channel.send("Changed my nickname to: " + args.slice(1).join(" "))
        return;
      }
      const user = message.mentions.users.first()
      if(!user){
        if(message.member.hasPermission("CHANGE_NICKNAME")){
          if(args.join(" ").length > 32){
            message.channel.send("Character limit exceeded. Nickname must be 32 characters or less! You had: " + args.join(" ").length)
            return;
          }
          message.member.setNickname(args.join(" "))
          message.channel.send("Changed your nickname to: " + args.join(" "))

        }else {
          message.channel.send("You lack the permissions to change your nickname. If you think this is an error, contact your server administrator, and if they are unable to help, use the contact command to contact PyroChicken for help. A tip: Make sure I have the permissions and my role is on top of the users role whom nickname you are trying to change.")
        }
        
      }else{
        if(message.member.hasPermission("MANAGE_NICKNAME")){
          member = message.guild.member(user)
          if(member){
            if(args.slice(1).join(" ").length > 32){
              message.channel.send("Character limit exceeded. Nickname must be 32 characters or less! You had: " + args.slice(1).join(" ").length )
              return;
            }
            member.setNickname(args.slice(1).join(" "))
            message.channel.send("Changed " + user.username + "'s nickname to: " + args.slice(1).join(" "))

        }
      
  
        }else{
          message.channel.send("You lack the permissions to change other users nickname. If you think this is an error, contact your server administrator, and if they are unable to help, use the contact command to contact PyroChicken for help. A tip: Make sure I have the permissions and my role is on top of the users role whom nickname you are trying to change.")

        }
      }
      
    
}else {
  message.channel.send("You lack the permissions to make changes your/other users nicknames. If you think this is an error, contact your server administrator, and if they are unable to help, use the contact command to contact PyroChicken for help. A tip: Make sure I have the permissions and my role is on top of the users role whom nickname you are trying to change.")

}

  

}




module.exports.help = {
    name: "nn",
}