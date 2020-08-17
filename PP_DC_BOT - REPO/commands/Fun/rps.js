const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        return message.channel.send('Please include your choice.')
    }

    let choices = ['rock', 'paper', 'scissors'];
    if (choices.includes((args[0]).toLowerCase())) {
        let number = Math.floor(Math.random() * 3);
        if (number == 1) {
            return message.channel.send('It was a tie, we both had ' + (args[1]).toLowerCase())
        }
        if (number == 2) {
            if ((args[0]).toLowerCase() == "rock") {
                return message.channel.send('I won, I had paper.')
            }
            if ((args[0]).toLowerCase() == "paper") {
                return message.channel.send('I won, I had scissors.')
            }
            if ((args[0]).toLowerCase() == "scissors") {
                return message.channel.send('I won, I rock.')
            }
        }
        if (number == 0) {
            if ((args[0]).toLowerCase() == "rock") {
                return message.channel.send('You won, I had scissors.')
            }
            if ((args[0]).toLowerCase() == "paper") {
                return message.channel.send('You won, I had rock.')
            }
            if ((args[0]).toLowerCase() == "scissors") {
                return message.channel.send('You won, I paper.')
            }
        }
    } else {
        return message.channel.send('Please include either: Rock, Paper, or Scissors.')
    }
}


module.exports.help = {
    name: "rps",
}