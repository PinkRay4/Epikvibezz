const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name : 'bal',
    description:'!',
    aliases : ['balance'],
    execute(message,args){
        let user = message.mentions.users.first() || message.author;
        let bal = db.get(`user_${user.id}.bal`);
        let embed = new Discord.MessageEmbed()
           .setTitle(`Balance of ${user.username}`)
           .setThumbnail(user.displayAvatarURL({ dynamic : true}))
           .setDescription(`Balance : ${bal}`)
           message.channel.send(embed)
    }
}