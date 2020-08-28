const Discord = require("discord.js");
const chalk = require('chalk');
const {Command} = require('sylphy');
const imdb = require('imdb-api');
const { red, green, blue, lime, orange, yellow, turquoise, purple } = require('./../../colors.json')


module.exports.run = async (bot, message, args) => {

    if(!args.length) {
        return message.channel.send("Please give the name of movie or series")
      }
      
      const imob = new imdb.Client({apiKey: "a6c84e96"}) 
      
      let movie = await imob.get({'name': args.join(" ")})
      
      let embed = new Discord.MessageEmbed()
      .setTitle(movie.title)
      .setColor(purple)
      .setThumbnail(movie.poster)
      .setDescription(movie.plot)
      .setFooter(`Ratings: ${movie.rating}`)
      .addField("Country", movie.country, true)
      .addField("Languages", movie.languages, true)
      .addField("Type", movie.type, true)
      .addField("Awards", movie.awards, true)
      
      
      message.channel.send(embed)
}

module.exports.help = {
  name: "imdb"
}