const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

let e = new Discord.MessageEmbed()
    .setColor(turquoise)
    .setTitle("Bot Information")
    .setDescription("Here is some information on the Bot and Creator!")
    .addField("Purpose", "This bot was made as a school project but is hopefully more than that!")
    .addField("Owner", "The Owner of this bot is PyroChicken#3588.")
    .addField("Version", `This bot is on Version ${version}, and is still being updated!`)
    .addField("Support", `Type '${prefix}help info' in chat and pay attention to the first command listed to contact me! NOTE: Any innapropriate use of this command, such as spam or innapropriate or invalid reasoning, will result in a blacklist from this bot! **You shall only recieve 1 warning!**`)
    .addField("Servers the bot is in:", bot.guilds.cache.size)
    .addField("Channels the bot is in:", bot.channels.cache.size)
    .addField("Users using this bot:", bot.users.cache.size)

    message.channel.send(e)
}


module.exports.help = {
    name: "bot",
}