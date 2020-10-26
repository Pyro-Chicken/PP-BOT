const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {

if(message.author.id === '455808529627086848'){
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    if(!args.length) return message.channel.send("Fill in \`args[0]\`")
    const commandName = args[0]
    const comand = bot.commands.get(args[1])
       

    console.log(`./../${args[0]}/${args[1]}`)    

    if (!comand) {
        return message.channel.send(`There is no command with name or alias \`${args[1]}\` in the folder \`${args[0]}\`, ${message.author}!`);
    }

    delete require.cache[require.resolve(`./../${args[0]}/${args[1]}.js`)];

    try {
        const newCommand = require(`./../${args[0]}/${args[1]}.js`);
        bot.commands.set(args[1], newCommand);
        message.channel.send(`Command \`${args[1]}\` in folder \`${args[0]}\` was reloaded!`);
    } catch (error) {
        console.error(error);
        message.channel.send(`There was an error while reloading the command \`${comand.name}\`:\n\`${error.stack}\``);
        return;
    }
}else { return message.channel.send("Only PyroChicken#3588 has permission to use this command!")}
   
}



module.exports.help = {
    name: "reload",
}