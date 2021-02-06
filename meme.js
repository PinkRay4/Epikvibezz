module.exports = {
    name: 'meme',
    description: 'me me btw only four memes yet :(',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
            'https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fill/w_1064,h_608,al_c,q_90/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.webp',
            'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            'https://www.albawaba.com/sites/default/files/styles/d08_standard/public/2021-01/ErKWvu5W4AE3sSt_0.jpg?h=5e2c3b87&itok=6x3TLl8U&mrf-size=m',
            'https://i.insider.com/5ea9887b0fc63978b759c857?width=700',
            'https://i.insider.com/5e6a8bfe235c1818d150f803?width=700',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username} I like your memes g`)
            message.channel.send(response);
        }
    }
};