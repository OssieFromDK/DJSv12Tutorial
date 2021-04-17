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

    } else if(message.content === `${p}myinfo`) {

        let embed = new Discord.MessageEmbed()
            .setTitle(message.author.username)
            .setImage(message.author.displayAvatarURL())
            .setColor("GREEN")
            .addField('Dit ID', message.author.id)
            .addField('Din discriminator', message.author.discriminator)
            .addField('Din bruger blev lavet d.', message.author.createdAt)
            .setFooter(`Kørt af ${message.author.username}`, message.author.displayAvatarURL());

        message.channel.send(embed)

    } else if(message.content === `${p}guildinfo`) {

        let embed = new Discord.MessageEmbed()
            .setTitle(message.guild.name)
            .setColor('GREEN')
            .setImage(message.guild.iconURL())
            .addField('Guild ID', message.guild.id)
            .addField('Guild Owner', message.guild.owner)
            .addField('Guild Region', message.guild.region)
            .setFooter(`Kørt af ${message.author.username}`, message.author.displayAvatarURL());

        message.channel.send(embed)

    }

});


client.login(tokenconfig.token)