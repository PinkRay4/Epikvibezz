module.exports - {
    name : 'stop',
    description:'play',
    async execute(bot,message,args){
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await bot.distube.getQueue(message);
    
        if(queue) {
            bot.distube.stop(message)
    
            message.channel.send('DONE!')
        } else if (!queue) {
            return
        };
    }
}