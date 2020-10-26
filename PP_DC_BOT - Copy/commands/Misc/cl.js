const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(message.channel.type ==='dm' ){
		return message.channel.send("Sorry, You may not use this command in a DM!")
	}

if (message.member.id === '455808529627086848'){
    console.log('\x1b[36mNew Console Message ' + "\x1b[37m" + ': \x1b[0m\x1b[31m' + args.join(" ") + '\x1b[35m')
    message.channel.send("Logged it in console!").then(m => {
        m.delete({
            timeout : 10000
        })
    });   
    if(message.deletable){
        message.delete()
    }else{
        return;
    }
    
}else {
    message.reply("Only the Bot Owner has access to this comamnd!")
}

}


module.exports.help = {
    name: "cl",
}