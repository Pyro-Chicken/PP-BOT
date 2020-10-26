const fetch = require('node-fetch');
const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    if(message.deletable){
        message.delete();
    };
    const { fortune } = await fetch('http://yerkee.com/api/fortune').then(response => response.json());;
	let fEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('-=Fortune Cookie=-')
	.setDescription(fortune)
    message.channel.send(fEmbed)
    return;
}
module.exports.help = {
    name: "fortune",
}