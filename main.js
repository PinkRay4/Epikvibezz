const Discord = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db')
const prefix = 'v! '
 
const fs = require ('fs');
const Level = require('discord-xp')
const alexa = require('alexa-bot-api')
const ai = new alexa();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}






bot.on("ready", () => {
    function randomStatus() {
      let status = ["Discord Bot", "YouTube", "Discord", "Glitch", "Node.js" , "FalixNodes" , "galaxy being dumb" , "Failing some codes oof" , "the owner being cool"] 
      let rstatus = Math.floor(Math.random() * status.length);
      
      bot.user.setActivity(status[rstatus], {type: "WATCHING", });
    }; setInterval(randomStatus, 10000)
    console.log(`Logged in as ${bot.user.tag}`)
  })


 
bot.on('message',  async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
        
    if(command === 'vibez'){
        message.channel.send('Music commands comin soon! but even more actuallyz')
    } else if (command === 'craziest'){
        message.channel.send('dank idiot prolly :)')
    } else if (command === 'cmds'){
        message.channel.send('The list of de loyal commands : *craziest , *vibez , *cmds , *zerotworate , *time , *nmissmart , *dumbness r8 , *whouhate , *rules' )
    } else if (command === 'zerotworate'){
        message.channel.send('no u are human so ')
    } else if (command === 'time'){
        message.channel.send('5:04 pm')
    } else if (command === 'nmissmart'){
        message.channel.send('nah he dum')
    } else if(command === 'dumbnessr8'){
        message.channel.send('90%')
    }else if(command === 'rules'|| command === 'r'){
        message.channel.send('-RULES - * No chatting in verify urself')
        message.channel.send('-No asking for moderator')
        message.channel.send('-No kicking/banning when you are admin')
        message.channel.send('-Treat everyone with respect. Absolutely no harassment, witch hunting,racism, or hate speech will be tolerated.')
        message.channel.send('-No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members.')
        message.channel.send('-No NSFW or obscene content. This includes text, images, or links featuring nudity,  hard violence, or other graphically disturbing content.')
        message.channel.send('-If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!')
        message.channel.send('-We support you as if you support us and our team, all the supporters out there are amazing!!')
    }else if(command === 'zerotwor8'){
        bot.commands.get('zerotwor8').execute(message, args)
    }else if(command === 'aww'){
        bot.commands.get('aww').execute(message, args)
    }else if(command === '8ball'){
        bot.commands.get('8ball').execute(message, args)
    }else if(command === 'purge'){
        bot.commands.get('purge').execute(message, args)
    }else if(command === 'bubblewrap' ){
        message.channel.send('||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||||e||')
    }else if(command === 'hunt' ){
        bot.commands.get('hunt').execute(message, args)
    }else if(command === 'play' ){
        bot.commands.get('play').execute(message, args)
    }else if(command === 'userinfo'){
        bot.commands.get('userinfo').execute(message,args)
    }else if (command === 'invitebot'){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=792327054322302986&scope=bot&permissions=2147483639 add me to your server!!!! go on do it viberzz')
    }else if (message.content.includes(`${prefix}help`)){
        bot.commands.get('help').execute(message,args)
    }else if (command === 'gayr8 '){
        bot.commands.get('gayr8').execute(message,args)
    }else if (command === 'gayr8 '){
        bot.commands.get('gayr8').execute(message,args)
    }else if(message.content.includes('hyprogay')){
        message.channel.send('no u!')
    }else if(message.content.includes('leave')){
        bot.commands.get('leave').execute(message,args)
    }else if(command === 'loop'){
        message.channel.send('**Looped** Song.')
    }else if(command === 'text'){
        var chatbot = new alexa('aw2p1m')
        let content = message.content;
        chatbot.getReply(content).then(r => message.channel.send(r))
    }else if(command === 'bal'){
        bot.commands.get('bal').execute(message,args)
    }else if(command === 'heist'){
        bot.commands.get('heist').execute(message,args)
    }

});
bot.login('NzkyMzI3MDU0MzIyMzAyOTg2.X-cGEg.8wZORMZwG-uyz3fyxP9OqigOJgI')