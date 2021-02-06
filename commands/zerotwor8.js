module.exports = {
    name: 'zerotwor8',
    description: 'shows rate',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
            '75%',
            '43%',
            '99%',
            '35%',
            '100%',
            '68%'
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('ZEROTWOR8')
                .setColor('RANDOM')
                .addField('Zerotwor8:', response);
            message.channel.send(embed);
            
        }
    }
};