module.exports = {
    name: 'help',
    description: 'A',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let embed = new Discord.MessageEmbed()
            .setTitle('Help command')
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL())
            .addFields()
        message.channel.send(embed).then(sentEmbed => {
            sentEmbed.react("❓")
        })
    }
};