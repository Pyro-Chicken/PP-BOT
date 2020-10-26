const chalk = require('chalk');
const {Command} = require('sylphy');
const imdb = require('imdb-api');
const Imbd_api = require('./../../config.json')


const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(!args.length) {
        return message.channel.send("Please give the name of movie or series")
      }
      
      const imob = new imdb.Client({apiKey: Imbd_api}) 
      
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

      .catch(err => console.log(err))
}

module.exports.help = {
  name: "imdb"
}