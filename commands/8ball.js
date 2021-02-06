module.exports = {
    name: '8ball',
    description: 'Ask a question and it responds with what it thinks',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) return message.reply('You need to specify a question!');
        else {
            let answers = [
            'Most certainly , yes',
            'Dude... THATS A PONG-PING QUESTION',
            'Yeah!',
            'Of course!',
            'yesh',
            'YASSSSSS',
            'Uhm..',
            'BRUH, you know the answer..cbcbcbcbcb',
            'ask pinkray',
            'yesyesyesyeysyesy',
            'bruh no',
            'yAs QuEeN',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setThumbnail(message.author.avatarURL())
                .addField('Question: ', question)
                .addField('Answer: ', response);
            message.channel.send(embed).then(sentEmbed => {
                sentEmbed.react("🎱")
            })
        }
    }
};