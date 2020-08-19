const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const axios = require('axios')
const api_key = "7a79f443d019165a25ba5ef3ffc49caf";




module.exports.run = async (bot, message, args) => {

    if(!args[0]) {
        return message.channel.send(`Please enter a city`)
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${api_key}`;

    let response, city;

    try {
        response = await axios.get(url);
        city = response.data
        // console.log(city)
    } catch (e) {
        // console.log(e)
        return message.channel.send(`Couldn't find that city`)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(`Weather in: ${city.name}`)
        .setColor(yellow)
        .setThumbnail(`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`)
        .setDescription(city.weather[0].description)
        .addFields(
            {
                name: "Current Temperature: ",
                value: `${city.main.temp} °C`,
                inline: true
            },
            {
                name: "Weather: ",
                value: city.weather[0].main
            },
            {
                name: "Feels like: ",
                value: `${city.main.feels_like} °C`,
                inline: true
            },
            {
                name: "Highest: ",
                value: `${city.main.temp_max} °C`,
                inline: true
            },
            {
                name: "Lowest: ",
                value: `${city.main.temp_min} °C`,
                inline: true
            },
            {
                name: "Sunrise: ",
                value: city.sys.sunrise,
                inline: true
            },
            {
                name: "Sunrise: ",
                value: city.sys.sunset,
                inline: true
            }
        )

    await message.channel.send(embed)
}


module.exports.help = {
    name: "weather",
    description: ''
}