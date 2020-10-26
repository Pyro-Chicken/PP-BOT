const Discord = require('discord.js');
const { default_prefix, token, version } = require('../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('../../colors.json')
const db = require('quick.db')




module.exports.run = async (bot, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)

    if(prefix === null) prefix = default_prefix;

    if(message.author.id !== '455808529627086848' ) return;

    try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        let a = new Discord.MessageEmbed()
            .setTitle("EVAL'D")
            .addField(":inbox_tray: Input: ", `\`\`\`${code}\`\`\``)
            .addField(":outbox_tray: Output: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
        message.channel.send(a)
      } catch (err) {
        const code = args.join(" ");

          let e = new Discord.MessageEmbed()
            .setTitle("ERROR")
            .addField(':inbox_tray: Input:', `\`\`\`${code}\`\`\``)
            .addField(":outbox_tray: Output: ", `\`\`\`${clean(err)}\`\`\``)
            message.channel.send(e);
      }

      function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
}


module.exports.help = {
    name: "eval",
}