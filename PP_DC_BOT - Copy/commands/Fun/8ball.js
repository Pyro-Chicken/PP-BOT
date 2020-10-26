const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')



module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

if(!args[0]){
    message.channel.send('You must provide a question for the 8-Ball to answer! Correct syntax: ' + prefix +'8Ball <question(can be more than one word)>')
    return;
}
let replies = ["Yes", "No", "I don't know", "Ask again later!", "I am not sure!", "You tell me...", "Without a doubt!", "Cannot predict now :("]

let results = Math.floor((Math.random() * replies.length));
let final = replies[results]
let question = args.join(" ")

let BallEmbed = new Discord.MessageEmbed()
    .setTitle("The 8BALL has SPOKEN!")
    .addField("Question:", question)
    .addField("Answer:", final)
    .setColor(orange)
    .setFooter('Requested by: ' + message.author.username)

message.channel.send(BallEmbed)

await message.delete();

}


module.exports.help = {
    name: "8ball"
}