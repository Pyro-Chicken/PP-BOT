const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

message.channel.send("Hi! How are you?")

    const filter = m => isNaN(m.content)
    const collector = message.channel.createMessageCollector(filter, { max: 1, time: 30000, errors: ["time"] });

    collector.once("collect", async function(m){
        try {
            let msgs = await message.channel.awaitMessages(
              (u2) => u2.author.id === message.author.id,
              { time: 15000, max: 1, errors: ["time"] }
            );
            if (msgs.content === 'good' || msgs.content === 'Good') {
              return message.channel.send(`Good to hear that your good!`);
            } else {
              return message.channel.send(`Good to hear! Or is that bad? Can't tell, don't have my reading glasses...`);
            }
          } catch (e) {
            return message.channel.send(`Not into sharing today, are we...?`);
          }
        

        
    })



}


module.exports.help = {
    name: "hello"
}