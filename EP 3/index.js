const Discord = require('discord.js');
const client = new Discord.Client();

const tokenconfig = require('./token.json');

client.on('ready', () => {
    console.log('Klar')
});

client.on('message', message => {

    if(message.content === '!hej') {
        message.channel.send('Hej med dig')
    } else if (message.content === '!test') {
        message.channel.send('test')
    }

});


client.login(tokenconfig.token)