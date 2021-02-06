const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name : 'heist',
    description:'!',
    execute(message,args){
        let rand = Math.floor(Math.random() * (1000-500)  + 500)
        db.add(`user_${message.author.id}.bal`,rand)
        message.channel.send(`${message.author.username} you got ${rand} coins from the heist`)
    }
}