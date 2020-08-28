const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const hastebin = require('hastebin-gen')




module.exports.run = async (bot, message, args) => {
    if (!args[0]) { return message.channel.send("What do you want to post in Hastebin? If you need help using this command type '+hastebin help'") }

    
    if(args[0] === 'help'){
        let e = new Discord.MessageEmbed()
            .setTitle("This is how you use the command:")
            .setDescription("+hastebin <code>")
            .addField("Here is an example:", "https://imgur.com/IDD8ZUG")
            .setFooter(`Requested by: ${message.author.username}`)
            .setColor(green)
        message.channel.send(e)
        return;
    }else {
        let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        message.delete();
        hastebin(haste).then(r => {

            message.channel.send("`"+ `${message.author.username} Posted to Hastebin at this URL:` + "`" + r);
            // console.log(r)

        }).catch(console.error).then(message.channel.send("Hastebin Is Down Right Now! Check the hastebin website for more information!"));



    }
    
}


module.exports.help = {
    name: "hastebin",
}