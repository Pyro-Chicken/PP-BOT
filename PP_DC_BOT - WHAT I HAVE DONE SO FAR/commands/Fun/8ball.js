const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

if(!args[0]){
    message.channel.send('You must provide a question for the 8-Ball to answer! Correct syntax: +8Ball <question(can be more than one word)>')
}
let replies = ["Yes", "No", "I don't know", "Ask again later!", "I am not sure!", "You tell me...", "Without a doubt!", "Cannot predict now :("]

let results = Math.floor((Math.random() * replies.length));
let question = args.join(" ")

let BallEmbed = new Discord.MessageEmbed()
    .setTitle("The 8BALL has SPOKEN!")
    .addField("Question:", question)
    .addField("Answer:", replies[results])
    .setColor(orange)
    .setFooter('Requested by: ' + message.author.username)

message.channel.send(BallEmbed)

await message.delete();

}


module.exports.help = {
    name: "8ball"
}