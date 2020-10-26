const Discord = require('discord.js');
const { default_prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    var item = "";
    var time;
    var winnerCount;
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You lack the permissions to execute this command!");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    
    if(!winnerCount) return message.reply("You have not provided the amount of winners!");
    if(!time) return message.reply("You have not provided the amount of time!");
    if(!item) return message.reply("You have not provided the prize item!");


    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 10000));

    var giveawayEmbed = new Discord.MessageEmbed()
        .setTitle('🎉**GIVEAWAY**🎉')
        .setDescription("Prize Item:" + item)
        .setFooter(`Ends at: ${dateEnd}`)
        .setColor(green)

    var embedSend = await message.channel.send(giveawayEmbed)
    embedSend.react("🎉")

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var poepleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < poepleReacted.length; i++) {
           
            if(poepleReacted[i].id == bot.user.id){
                poepleReacted.splice(i,1);
                continue;
            }
            
        }

        if(poepleReacted.length == 0){
            return message.channel.send("No one replied, therefore, I win!");
        }

        if(poepleReacted.length < winnerCount){
            return message.channel.send("Too little people joined the giveaway, therefore, I win!")
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * poepleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if(winners[o] == poepleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }

                
            }

            if (!inList){
                winners.push(poepleReacted[random]);
            }
            
        }

        for (let y = 0; y < winners.length; y++) {
            let WinnerEmbed = new Discord.MessageEmbed()
                .setTitle('🎉WE HAVE A WINNER!🎉')
                .setDescription(winners[y].username)
                .addField('You have won: ', item)
            message.channel.send(WinnerEmbed)
            message.channel.send(`${winners[y]}`)

            
        }
    }, time * 60000)

}

module.exports.help = {
    name: "giveaway",
}
