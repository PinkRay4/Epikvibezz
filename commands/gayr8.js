module.exports = {
    name: 'gayr8',
    description: 'shows rate',
    async execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");
        if(!args[1]) return message.channel.send('Correct usage : v! gayr8 pinkray')
        if(!question){
            let answers = [
            '75%',
            '43%',
            '99%',
            '35%',
            '100%',
            '68%',
            '1%'
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('gayr8')
                .setColor('RANDOM')
                .addField(`${args[1]} is surely ${response} gay`);
            message.channel.send(embed);
        }
    }
};