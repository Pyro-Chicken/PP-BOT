
const querystring = require('querystring');
const fetch = require('node-fetch');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);


const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

	if (!args.length) {
		return message.channel.send('You need to supply a search term!');
	}

	const query = querystring.stringify({ term: args.join(' ') });

	const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

	if (!list.length) {
		return message.channel.send(`No results found for **${args.join(' ')}**.`);
	}

	const [answer] = list;

	const urbanembed = new Discord.MessageEmbed()
		.setColor('#EFFF00')
		.setTitle(answer.word)
		.setURL(answer.permalink)
		.addFields(
			{ name: 'Definition', value: trim(answer.definition, 1024) },
			{ name: 'Example', value: trim(answer.example, 1024) },
			{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
		);
	message.channel.send(urbanembed);

}


module.exports.help = {
    name: "urban",
}