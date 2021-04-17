const Discord = require('discord.js');
const client = new Discord.Client();

const tokenconfig = require('./token.json');
const config = require('./config.json');

client.on('ready', () => {
    console.log('Klar')
});

client.on('message', message => {

    const p = config.prefix;

    if(message.content === `${p}hej`) {
        message.channel.send('Hej med dig')
    } else if(message.content === `${p}test`) {
        message.channel.send('test')
    } else if(message.content === `${p}embed`) {

        let embed = new Discord.MessageEmbed()
            .setTitle('Mit Embed')
            .setColor('GREEN')
            .setDescription('Lavet af mig')
            .addField('Field1', 'Dette er mit field')
            .setFooter('Lavet af mig');

        message.channel.send(embed)

    }

});


client.login(tokenconfig.token)