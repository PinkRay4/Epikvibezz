module.exports = {
    name : 'purge',
    description : 'purge command, clear msgs!',
    async execute(message,args){
    if(!args [0]) return message.reply('Please enter the amount of messages you want to clear!');
    if(isNaN(args[0])) return message.reply('enter a real number bruh');
    if(args[0]>1000)return message.reply('You cannot delete more than 1000 messages!');
    if (args[0]<1) return message.reply('You should delete atleast one message like bruh');

    await message.channel.messages.fetch({Limit:args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
    });

    }
}
