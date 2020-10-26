
const axios = require('axios')
const api_key = "7a79f443d019165a25ba5ef3ffc49caf";




const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;
    if(!args.length) {
        return message.channel.send(`Please enter a city`)
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=${api_key}`;

    let response, city;

    try {
        response = await axios.get(url);
        city = response.data
        // console.log(city)
    } catch (e) {
        // console.log(e)
        return message.channel.send(`Couldn't find that city`)
    }

    let sun_rise = city.sys.sunrise
    var sunrise_date = new Date(sun_rise * 1000);
    var sunrise_hours = sunrise_date.getHours();
    var sunrise_minutes = "0" + sunrise_date.getMinutes();
    var sunrise_seconds = "0" + sunrise_date.getSeconds();
    var finalSunrise = sunrise_hours + ':' + sunrise_minutes.substr(-2) + ":" + sunrise_seconds.substr(-2);

    let sun_set = city.sys.sunset
    var sunset_date = new Date(sun_set * 1000);
    var sunset_hours = sunset_date.getHours();
    var sunset_minutes = "0" + sunset_date.getMinutes();
    var sunset_seconds = "0" + sunset_date.getSeconds();
    var finalSunset = sunset_hours + ':' + sunset_minutes.substr(-2) + ":" + sunset_seconds.substr(-2);

    
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
                value: finalSunrise,
                inline: true
            },
            {
                name: "Sunset: ",
                value: finalSunset,
                inline: true
            }
        )

    await message.channel.send(embed)

}


module.exports.help = {
    name: "weather",
    description: ''
}