const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

    try {
        const hex = Math.random().toString(16).slice(2, 8).toUpperCase().slice(-6);
    
        const color = !args[0] ? hex : args[0];
        const embed = new Discord.MessageEmbed()
          .setColor(hex)
          .setDescription("Random HEX Code: #" + hex)
          .setTitle("#" + hex)
          .setImage(`https://www.color-hex.com/color/${hex}`);
    
        message.channel.send(embed);
      } catch (err) {
        message.channel.send("There was an error!\n" + err).catch();
      }
}


module.exports.help = {
    name: "randomhex",
}