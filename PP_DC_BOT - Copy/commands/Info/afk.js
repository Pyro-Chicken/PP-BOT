const Discord = require('discord.js');
const { default_prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
if(message.member.hasPermission('ADMINISTRATOR') || message.author.id === '455808529627086848'){
    if(args[0] == 'role'){
        let checkrole = message.guild.roles.cache.find(r => r.name == 'afk')
        if(checkrole) return message.channel.send('You already have a role named afk, I won\'t make another!')
        await message.guild.roles.create({
            data: {
                name: 'afk',
                color: '#c5c9d1',
            }, reason: 'Create afk role for the guild!',
        })
        message.channel.send('created')
        return;
    }
}

let user = message.member
let role = message.guild.roles.cache.find(role => role.name === 'afk');
if(role) {
    user.roles.add(role)
}else return message.channel.send(`This guild does not have a role named 'afk'! Simply make an role named 'afk' with no extra changes to permissions. You could type '${prefix}afk role' to create a role `) 

let e = new Discord.MessageEmbed()
    .setTitle("AFK")
    .setDescription(`<@${message.author.id}> is now AFK!`)
    .setColor(yellow)

message.channel.send(e)

const filter = m => !isNaN(m.content) || isNaN(m.content)
const collector = message.channel.createMessageCollector(filter, { max: 1 });

collector.on('collect', async function(m){
    let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { max: 1 }
      );
      let role = message.guild.roles.cache.find(role => role.name === 'afk');

        let a = new Discord.MessageEmbed()
            .setTitle('Welcome Back ' + message.author.username)
            .setDescription(message.author.username + ' is Back!')
             .setColor(green)
        message.channel.send(a)
        message.channel.send(`<@${message.author.id}> `)
        user.roles.remove(role)
          
      
    })




}



module.exports.help = {
    name: "afk",
}