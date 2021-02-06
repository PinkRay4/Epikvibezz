module.exports = {
    name: 'hunt',
    description: 'hunt for epik dollars',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
            'You went hunting and brought back a **EpikVIBEZZ pet** oml $60000000 for that 🤑 ',
            'You went hunting and brought back a **Albino monkey**',
            'You went hunting and brought back a **Dank pet** yo why him',
            'You went hunting and brought back a **Youtube pet** Wonder whats that.. $6628',
            'You went hunting and brought back a **Bunny** not bad ngl $104',
            'You went hunting and brought back a **Adult Deer**',
            'You went hunting and brought back a **Reindeer** 🦌 WAIT... DID U STEAL IT FROM SANTA? ima just give $357',
            'You went hunting and brought back a **Baby Deer** 🦌 at the point, you also earned $5009 vibe dollars🤑💸💸💰 ',
            'You went hunting and brought back a **Hare** And earned -1000',
            'You went hunting and brought back a **Boar** 🐗 And earned $1003',
            'Bruh your so terrible, you found NOTHING!',
            'You found nothing but $6005 epik dollars wow..',
            'You went hunting and brought back a **Cow** poor thing you killed it.... $400',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username} hunting... (in progress)`)
            message.channel.send(response);
        }
    }
};