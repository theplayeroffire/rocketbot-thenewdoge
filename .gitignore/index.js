const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '.';

client.login('NDQxMjE1MzE0OTUzMjQwNTc4.DctBjA.bXoa9V1O2f_zMGysZ8GN1c6A4qM');

client.on('ready', () => {
    console.log("bot ready to start!")
    client.user.setGame('cache cache !^^');
});

client.on('message', message => {
    if(message.content === prefix + 'ping') {
        message.reply('pong')
        console.log('test ping');
    }

    if(message.content === prefix + 'info') {
        var info_embed = new Discord.RichEmbed()
        .setColor('#0066CC')
        .setTitle('Informations sur le bot:')
        .addField("Nom du bot:", `${client.user.tag}`, true)
        .addField("Discriminator :", `#${client.user.discriminator}`)
        .addField('ID du bot :', `${client.user.id}`)
        .addField('Nombres de membres :', message.guild.members.size)
        .addField('Nombre de catégories et de salon', message.guild.channels.size)
        .setFooter('Bot créé par @тнεηεω∂σgε#8477')
        message.channel.sendEmbed(info_embed);
        console.log('info commande')
    }

    if(message.content === prefix + 'help') {
        var help_embed = new Discord.RichEmbed()
        .setColor('#0066CC')
        .setTitle('Voici les commandes de RocketBot :')
        .addField('.help', 'affiche les commandes du bot')
        .addField('.ping', 'teste de rapidité du Bot')
        .addField('.info', 'affiche les informations sur le Bot')
        .setFooter('bot créé par @тнεηεω∂σgε#8477')
        message.channel.sendEmbed(help_embed);
        console.log('help commande')

    }
});
