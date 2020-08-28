const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const { NovelCovid } = require('novelcovid');
const fetch = require ('node-fetch')







module.exports.run = async (bot, message, args) => {


let countries = args.join(" ");

const noArgs = new Discord.MessageEmbed()
.setTitle('Missing arguments!')
.setColor(red)
.setDescription('You are missing some arguments! (Usage: +covid all || +covid <country>)')
.setTimestamp()

if(!args[0]) return message.channel.send(noArgs);

if(args[0] === "all"){
    fetch(`https://covid19.mathdro.id/api`)
    .then(response => response.json())
    .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Worldwide COVID-19 Stats 🌎`)
        .addField('Confirmed Cases', confirmed)
        .addField('Recovered', recovered)
        .addField('Deaths', deaths)
        .setColor(orange)
        .setFooter('All results are based of an API and therefore results are exact to the tens.', bot.user.DisplayAvatarURl)
        .setTimestamp()

        message.channel.send(embed)
    })
} else {
    fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
    .then(response => response.json())
    .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`COVID-19 Stats for **${countries}**`)
        .addField('Confirmed Cases', confirmed)
        .addField('Recovered', recovered)
        .addField('Deaths', deaths)
        .setColor(yellow)
        .setFooter('All results are based of an API and therefore results are exact to the tens.', bot.user.DisplayAvatarURl)
        .setTimestamp()

        message.channel.send(embed)
    }).catch(e => {
        let noCountry = new Discord.MessageEmbed()
        .setTitle('Invalid country provided! Make sure the argument you provide is either "all" or a country!')
        .setColor(red)
        .setFooter('All results are based of an API and therefore results are exact to the tens.', bot.user.DisplayAvatarURl)
        .setTimestamp()
        return message.channel.send(noCountry)
    })
}
}


module.exports.help = {
    name: "covid-19"

}