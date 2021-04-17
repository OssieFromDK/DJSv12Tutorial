const Discord = require('discord.js');
const client = new Discord.Client();

const tokenconfig = require('./token.json');
const config = require('./config.json');

client.on('ready', () => {
    console.log('Klar')
});

client.on('message', message => {
    if(message.channel.type === 'dm') return; // gør så man ikke kan bruge commands i DM
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'args') {
        if(!args.length) {
            return message.channel.send('Du skal angive nogle argumenter!')
        } else if(args[0] === 'kat') {
            return message.channel.send('meow')
        }
    } else if(command === 'ban') {
        const banBruger = message.mentions.users.first();

        if(!banBruger) return message.channel.send('Du skal tagge et medlem der skal bannes!')

        const grund = args.slice(1).join(" ")
        if(!grund) return message.channel.send('Du skal angive en grund til bannet')

        message.channel.send(`Du vil gerne banne: ${banBruger.username} med grunden: ${grund}`)
        return;
    }
});


client.login(tokenconfig.token)