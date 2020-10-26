
const hastebin = require('hastebin-gen')




const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')
const fetch = require('node-fetch')



module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;   
    if (!args[0]) { return message.channel.send(`What do you want to post in Hastebin? If you need help using this command type '${prefix}hastebin help'`) }

    if(args[0] === 'help'){
        let e = new Discord.MessageEmbed()
            .setTitle("This is how you use the command:")
            .setDescription(`${prefix}hastebin <code>`)
            .addField("Here is an example:", "https://imgur.com/IDD8ZUG")
            .setFooter(`Requested by: ${message.author.username}`)
            .setColor(green)
        message.channel.send(e)
        return;
    }

    const options = {
        method: 'POST',
        body: args.join(" ")
    }

const res = await (await fetch(`https://hastebin.com/documents`, options)).json();

message.channel.send(`:white_check_mark: Posted to hastebin with this URL: https://hastebin.com/${res.key}`);

if(message.deletable){
    message.delete()
}


}


module.exports.help = {
    name: "hastebin",
}