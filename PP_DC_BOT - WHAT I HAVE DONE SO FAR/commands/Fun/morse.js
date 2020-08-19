const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json')




module.exports.run = async (bot, message, args) => {

    let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
    morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
    text = args.join(" ").toUpperCase();
while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
    text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
}
if (text.startsWith(".") || text.startsWith("-")) {
    text = text.split(" ");
    let length = text.length;
    for (i = 0; i < length; i++) {
        text[i] = alpha[morse.indexOf(text[i])];
    }
    text = text.join("");
} else {
    text = text.split("");
    let length = text.length;
    for (i = 0; i < length; i++) {
        text [i] = morse[alpha.indexOf(text[i])];
    }
    text = text.join(" ");
}
if(message.deletable){
    message.delete()
}
return message.channel.send("```" + text + "```");
}


module.exports.help = {
    name: "morse",
}