const Discord = require('discord.js');
const { prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')
// const me = '455808529627086848'



module.exports.run = async (bot, message, args) => {


    let Invite = await message.guild.channels.cache.find((c) => c.type === 'text').createInvite()
    let sender = message.author
    const reason = args.join(" ")
    if(!reason){
        let e = new Discord.MessageEmbed()
        .setTitle("Incorrect Syntax")
        .setDescription("Use '+contact <reason>' to contact PyroChicken#3588!")
        .addField("REMINDER!", "Any innapropriate use of this command, such as spam or innapropriate or invalid reasoning, will result in a blacklist from this bot! **You shall only recieve 1 warning!**")
        .setColor(red)
    message.channel.send(e)
    return;
    }
    
    let c = new Discord.MessageEmbed()
        .setTitle("Response from Contact Command!")
        .setDescription(`Contact message from: [${message.guild.name}]`)
        .addField("Invite:", Invite.url, true)
        .addField("User:", sender, true)
        .addField("User Id:", sender.id, true)
        .addField("Message:", reason)
        .setColor(orange)
        .setThumbnail(sender.displayAvatarURL)
        .setTimestamp()

    bot.users.cache.get('455808529627086848').send(c)

    let f = new Discord.MessageEmbed()
        .setTitle("Message Sent!")
        .setDescription("Your contact message has been sent and recieved, expect a reply shortly!")
        .addField("Requested by:", sender)
        .addField("Message:", reason)
        .addField("REMINDER!", "Any innapropriate use of this command, such as spam or innapropriate or invalid reasoning, will result in a blacklist from this bot! **You shall only recieve 1 warning!**")
        .setFooter("Thank you for contacting PyroChicken#3588!")
        .setTimestamp()
        .setColor(green)

    message.channel.send(f).then(m => {
        m.delete({ timeout: 10000 })
      });

    message.delete();


    

}


module.exports.help = {
    name: "contact"
}