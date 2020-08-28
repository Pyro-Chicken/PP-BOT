const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const search = require('yt-search');





module.exports.run = async (bot, message, args, ops) => {

    message.channel.send("This command is un-available as it cannot be parsed with the other, more nessisary, functions of this bot. If you would like a well functioning music bot, refer to the PP Music Bot")

}

module.exports.help = {
    name: "search",
}
