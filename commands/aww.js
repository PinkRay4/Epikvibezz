module.exports = {
    name: 'aww',
    description: 'SOME CUTE PICS!',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question){
            let answers = [
            ' https://wallpaperaccess.com/really-cute-animal',
            'https://images.all-free-download.com/images/wallpapers_thum/cute_dog_christmas_11054.jpg',
            'https://wallpaperaccess.com/full/30885.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3bykUwvFk0pBNZJVkfuvT5NKvbmOFYBkqg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgplknT21s4pgziYcGmQgySCi4XjYiRkzPQA&usqp=CAU',
            'https://i.ytimg.com/vi/HOUyj8iXaBg/maxresdefault.jpg',
            'https://static.boredpanda.com/blog/wp-content/uploads/2014/03/cute-fluffy-animals-coverimage.jpg',
            'https://images.wsj.net/im-140539?width=1280&size=1',
            'https://i.pinimg.com/originals/a6/94/c2/a694c2f6dac7497974c391c7ecb0e337.jpg',
            'https://cdn.cnn.com/cnnnext/dam/assets/130819142015-cutest-animal-1-fennec-fox.jpg',
            '',
            '',
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username} heres something to aww at!`)
            message.channel.send(response);
        }
    }
};