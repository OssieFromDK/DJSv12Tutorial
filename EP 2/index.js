const Discord = require('discord.js');
const client = new Discord.Client();

const tokenconfig = require('./token.json');

client.on('ready', () => {
    console.log('Klar')
});

client.login(tokenconfig.token)