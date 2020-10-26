const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])); 
    
    if(mUser.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR') ) {
        return message.channel.send("You can not mute that person!").then(m => m.delete(10000));
    }
    if(args[0] === 'rolecreate'){
        await message.guild.roles.create({
            data: {
                name: 'Muted',
                color: '#808080',
            }, reason: 'Create muted role for the person!',
        })

        let mRole = await message.guild.roles.cache.find(role => role.name === 'Muted');

        await mRole.setPermissions(0)
            .then(mRole.setPermissions(['VIEW_CHANNEL', 'CREATE_INSTANT_INVITE', 'CONNECT']))
            .catch(console.error)

        let eRole = await message.guild.roles.cache.find(role => role.name === '@everyone')

        await eRole.setPermissions([
        'CREATE_INSTANT_INVITE',
        'VIEW_CHANNEL',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'USE_EXTERNAL_EMOJIS',
        'CONNECT',
        'USE_VAD'])
        // await mRole.setPermissions([''])
        return;
    }

    if(!args[0]) return message.channel.send("Please mention a user!")
    if (!mUser) return message.channel.send("Couldn't find user!");
    let mReason = args.join(" ").slice(22);
    if(!mReason) return message.channel.send("Please state a reason!")
    

    let mEmbed = new Discord.MessageEmbed()
    .setTitle('-=Mute=-')
    .setColor('#FFFF00')
    .addField('Muted user:', `${mUser} with ID: ${mUser.id}`)
    .addField('Muted By:', `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField('Reason:', mReason)
    .addField("Reported In:", message.channel)
    .addField("Time of report:", message.createdAt)

        
                let mRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                if(mRole) {
                    mUser.roles.add(mRole);
                    message.guild.channels.cache.find(channel => channel.name === 'bot-logs' && channel.type === "text").send(mEmbed);
    
                }
                
                else {
                    message.channel.send(`Muted role not found! Make a muted role, that denies users form speaking, or use the command \`${prefix}mute rolecreate\` to automatically create the role if the bot has sufficient permissions, and I shall assign it to them once the command is used!`).then(msg => {msg.delete({timeout:10000})});
                }
        
        
            
    
            

}


module.exports.help = {
    name: "mute",
}