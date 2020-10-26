
const Discord = require('discord.js');
const { default_prefix, token, version, yt_key } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')
const search = require('youtube-search');

const opts = {
    maxResults: 25,
    key: yt_key,
    type: 'video'
};







module.exports.run = async (bot, message, args, ops) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    search(args.join(''), opts, function(err, res){
        if(err){
            message.channel.send("Something went wrong")
            // console.log(err)
            return;
        }
        
        let videos = res
        // console.log(res)
        
        let resp = '';
        for(var i in videos){
            resp += `**[${parseInt(i)+1}]** \`${videos[i].title}\`\n`;
        }

        resp += `\n**Choose a number between \`1-${videos.length}\``;
        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m){
            let commandFile = require ("./play.js");
            commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].link], ops);
        });

    });
    }


module.exports.help = {
    name: "search",
}
