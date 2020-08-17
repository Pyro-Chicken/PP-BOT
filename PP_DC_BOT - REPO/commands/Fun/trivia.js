const Discord = require('discord.js');
const { prefix, token, version } = require('./../../config.json');
const { red, green, blue, lime, orange, yellow, turquoise } = require('./../../colors.json');
const { options } = require('snekfetch');




module.exports.run = async (bot, message, args) => {

    let questions = [
        {
          title: "Best programming language",
          options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
          correct: 1,
        },
        {
          title: "Best NPM package",
          options: ["int.engine", "ms", "ws", "discord.js"],
          correct: 3,
        },
        {
          title: "What is the rarest M&M color?",
          options: ["Blue", "Green", "Brown", "Yellow"],
          correct: 3,
        },
        {
          title: "In what year was the first AIR Jordan sneakers released?",
          options: ["1983", "1984", "1979", "1990"],
          correct: 2,
        },
        {
          title: "In a game of bingo, which number is represented by the phrase “two little ducks”?",
          options: ["2", "12", "20", "22"], 
          correct: 4,
        },
        {
          title: "Which African country was formerly known as Abyssinia?",
          options: ["Algeria", "Ethiopia", "Burkina Faso", "Chad"],
          correct: 2,
        },
        {
          title: "Which turn-of-the-century NBA great's middle name is \"Bean\"?",
          options: ["Micheal Jordan", "Kyrie Irving", "JaVale McGee", "Kobe Bryant"],
          correct: 4,
        },
        {
          title: "Champion NBA point guard Kyrie Irving was born in which country?", 
          options: ["Denmark", "USA", "Australia", "Congo"],
          correct: 3,
        },
        {
          title: "Which country consumes the most chocolate per capita?",
          options: ["Switzerland", "Sweden", "USA", "Columbia"],
          correct: 1,
        },
        {
          title: "What was the first toy to be advertised on television?",
          options: ["Lego", "Army Men", "Slinky", "Mr.Potato Head"],
          correct: 4,
        },
        {
          title: "What is the tiny piece at the end of a shoelace called?",
          options: ["An aglet", "The tip", "The lace", "Lace tip"],
          correct: 1,
        },
        {
          title:"What is the tallest breed of dog in the world?",
          options: ["The Great Dane", "Dachshund", "Dobermann", "Irish Wolfhound"],
          correct: 1,
        },
        {
          title: "How many ribs are in a human body?",
          options: ["30", "24", "32", "16"],
          correct: 2,
        },
        {
          title: "What is the world’s biggest island?",
          options: ["New Guinea", "Madagascar", "Greenland", "Baffin Island"],
          correct: 3,
        },
        {
          title: "What color eyes do most humans have?",
          options: ["Black", "Brown", "Blue", "Green"],
          correct: 2,
        },
        {
          title: "In which city was Anne Frank’s hiding place?",
          options: ["Frankfurt", "Echternach", "Amsterdam", "Antwerp"],
          correct: 3,
        },
        {
          title: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
          options: ["5", "4", "6", "7"],
          correct: 3,
        },
        {
          title: "What country won the very first FIFA World Cup in 1930?",
          options: ["Germany", "Netherlands", "Argentina", "Uruguay"],
          correct: 4,
        },
        {
          title: "In what year was the first ever Wimbledon Championship held?",
          options: ["1877", "1876", "1867","1866"],
          correct: 1,
        },
        {
          title: "Which country produces the most coffee in the world?",
          options: ["USA", "Canada", "Brazil", "France"],
          correct: 3,
        },
        {
          trivia: "How many hearts does an octopus have?",
          options: ["1", "2", "3", "4"],
          correct: 3,
        },
        {
          title: "How many eyes does a bee have?",
          options: ["2", "3", "4", "5"],
          correct: 4,
        },
        {
          title: "Who was the first woman to win a Nobel Prize?",
          options: ["Henry Dunat", "Marie Curie", "Jacobus H. van‘t Hoff", "Sully Prudhomme"],
          correct: 1,
        },
        {
          title: "Which mammal has no vocal cords?",
          options: ["Hippos", "Elephants", "Rats", "Girrafes"],
          correct: 4,
        },
        {
          title: "What type of music has been shown to help plants grow better and faster?",
          options: ["R&B", "Rock", "Jazz", "Classical"],
          correct: 4,
        },
        {
          title: "Power outages in the US are mostly caused by what?",
          options: ["Rats", "Bad Communication", "Squirrels", "Malfunctions"],
          correct: 3,
        },
        {
          title: "What’s the hardest rock?",
          options: ["A boulder", "A diamond", "A ruby", "A pebble"],
          correct: 2
        },
        {
          title: "The Statue of Liberty was given to the US by which country?",
          options: ["Germany", "Canada", "Russia", "France"],
          correct: 4
        }
      ];
     
          let q = questions[Math.floor(Math.random() * questions.length)];
          let i = 0;
          const Embed = new Discord.MessageEmbed()
            .setTitle(q.title)
            .setDescription(
              q.options.map((opt) => {
                i++;
                return `${i} - ${opt}\n`;
              })
            )
            .setColor(`GREEN`)
            .setFooter(
              `Reply to this message with the correct question number! You have 15 seconds.`
            );
          message.channel.send(Embed);
          try {
            let msgs = await message.channel.awaitMessages(
              (u2) => u2.author.id === message.author.id,
              { time: 15000, max: 1, errors: ["time"] }
            );
            if (parseInt(msgs.first().content) == q.correct) {
              return message.channel.send(`You got it correct!`);
            } else {
              return message.channel.send(`You got it incorrect. The correct answer was: ${q.correct}`);
            }
          } catch (e) {
            return message.channel.send(`You did not answer!`);
          }
        }
    


module.exports.help = {
    name: "trivia",
}