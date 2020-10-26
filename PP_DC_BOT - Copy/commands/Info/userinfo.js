const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
var userCreated = user.createdAt.toString().split(' ');
    const UserInfoEmbed = new Discord.MessageEmbed()
    .setColor(lime)
    .setTitle(`${message.author.username}'s User Info`)
    .setAuthor("Personal Project Bot", 'https://cdn.discordapp.com/embed/avatars/1.png')
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`${user.tag}`, `${user}` )
    .addField("ID:", `${user.id}`)
    .addField("Nickname:", `${message.member.displayName !== null ? `${message.member.displayName}` : 'None'}`)
    .addField("Status:", `${user.presence.status}`)
    .addField("In Server", message.guild.name)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`)
    .addField("Bot:", `${user.bot}`)
    .addField("Account Created On:", userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3] ) 
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)

message.channel.send(UserInfoEmbed);

}


module.exports.help = {
    name: "user-info",
}